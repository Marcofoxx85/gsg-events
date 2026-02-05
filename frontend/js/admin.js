/* ===================================
   GSG EVENTS - ADMIN DASHBOARD
   Admin Logic
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    initAdminNavigation();
    initEventCreation();
});

function initAdminNavigation() {
    const menuItems = document.querySelectorAll('.admin-menu-item');
    const sections = document.querySelectorAll('.admin-section');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active classes
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.add('hidden'));

            // Add active class
            item.classList.add('active');

            // Show section
            const targetId = item.getAttribute('href').substring(1) + '-section';
            document.getElementById(targetId)?.classList.remove('hidden');
        });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('gsg_token');
            window.location.href = 'login.html';
        }
    });
}

function initEventCreation() {
    const form = document.getElementById('create-event-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Event Created Successfully! (Mock)');
        form.reset();
        // Switch back to dashboard or events list
    });
}
