/* ===================================
   GSG EVENTS - AUTHENTICATION
   Login/Register Logic
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const btn = loginForm.querySelector('button[type="submit"]');

            try {
                btn.innerText = 'LOGGING IN...';
                btn.disabled = true;

                // Use API client from api.js
                const response = await window.API.login(email, password);

                // Store token
                localStorage.setItem('gsg_token', response.access_token);
                localStorage.setItem('gsg_user', JSON.stringify(response.user));

                // Redirect
                window.location.href = 'index.html';

            } catch (error) {
                console.error('Login error:', error);
                alert('Invalid email or password');
                btn.innerText = 'LOGIN';
                btn.disabled = false;
            }
        });
    }

    // Check Auth Status
    checkAuthStatus();
});

function checkAuthStatus() {
    const token = localStorage.getItem('gsg_token');
    const navLinks = document.querySelector('.nav-links');

    if (token && navLinks) {
        // Change login link to profile/logout
        const loginLink = document.querySelector('a[href="login.html"]');
        if (loginLink) {
            loginLink.href = 'profile.html';
            loginLink.innerText = 'PROFILE';
        }
    }
}
