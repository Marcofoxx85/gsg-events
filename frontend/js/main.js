/* ===================================
   GSG EVENTS - MAIN JAVASCRIPT
   Glasgow Sound Gallery Brand
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initEventsGrid();
    initCountdown();
});

/* NAVIGATION */
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';

            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid #2A2A2A';
            }
        });
    }

    // Sticky Navbar transparency effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
}

/* ANIMATIONS */
function initAnimations() {
    // Scroll Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.event-card, .artist-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Glitch Effect Randomizer
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #D4FF00,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #FF3366
            `;
            setTimeout(() => {
                glitchElement.style.textShadow = 'none';
            }, 50);
        }, 3000);
    }
}

/* EVENTS FILTERS */
function initEventsGrid() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter cards
            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* BOOKING FLOW LOGIC (For booking.html) */
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.booking-section')) {
        initBookingFlow();
    }
});

function initBookingFlow() {
    const steps = ['step-1', 'step-2', 'step-3'];
    let currentStep = 0;

    // Quantity Selectors
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            const type = e.target.getAttribute('data-ticket');
            const input = document.getElementById(`qty-${type}`);
            let value = parseInt(input.value);

            if (action === 'increase' && value < 10) value++;
            if (action === 'decrease' && value > 0) value--;

            input.value = value;
            updateOrderSummary();
        });
    });

    // Navigation
    const nextBtns = document.querySelectorAll('#continue-to-details, #details-form button[type="submit"]');
    const backBtns = document.querySelectorAll('#back-to-tickets, #back-to-details');

    document.getElementById('continue-to-details').addEventListener('click', () => {
        if (calculateTotal() > 0) {
            goToStep(1);
        } else {
            alert('Please select at least one ticket.');
        }
    });

    document.getElementById('details-form').addEventListener('submit', (e) => {
        e.preventDefault();
        goToStep(2);
    });

    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking confirmed! Check your email for tickets.');
        window.location.href = 'index.html';
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(currentStep - 1);
        });
    });

    function goToStep(index) {
        // Hide current
        document.getElementById(steps[currentStep]).classList.add('hidden');
        document.querySelectorAll('.progress-step')[currentStep].classList.remove('active');

        // Show next
        currentStep = index;
        document.getElementById(steps[currentStep]).classList.remove('hidden');
        document.querySelectorAll('.progress-step')[currentStep].classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function updateOrderSummary() {
    const prices = {
        general: 20,
        vip: 35
    };

    const generalQty = parseInt(document.getElementById('qty-general')?.value || 0);
    const vipQty = parseInt(document.getElementById('qty-vip')?.value || 0);

    const summaryItems = document.getElementById('summary-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const bookingFeeEl = document.getElementById('booking-fee');

    let html = '';
    let subtotal = 0;

    if (generalQty > 0) {
        html += `<div class="summary-item"><span>${generalQty}x General Admission</span><span>£${generalQty * prices.general}</span></div>`;
        subtotal += generalQty * prices.general;
    }
    if (vipQty > 0) {
        html += `<div class="summary-item"><span>${vipQty}x VIP Ticket</span><span>£${vipQty * prices.vip}</span></div>`;
        subtotal += vipQty * prices.vip;
    }

    if (subtotal === 0) {
        summaryItems.innerHTML = '<p class="summary-empty">No tickets selected</p>';
    } else {
        summaryItems.innerHTML = html;
    }

    const bookingFee = subtotal > 0 ? 2.50 : 0;

    subtotalEl.innerText = `£${subtotal.toFixed(2)}`;
    bookingFeeEl.innerText = `£${bookingFee.toFixed(2)}`;
    totalEl.innerText = `£${(subtotal + bookingFee).toFixed(2)}`;
}

function calculateTotal() {
    const generalQty = parseInt(document.getElementById('qty-general')?.value || 0);
    const vipQty = parseInt(document.getElementById('qty-vip')?.value || 0);
    return generalQty + vipQty;
}

/* UTILS */
function initCountdown() {
    // Placeholder for countdown logic if needed
}
