/* ===================================
   GSG EVENTS - API CLIENT
   Wrapper for Backend API Calls
   =================================== */

const API_BASE_URL = 'http://localhost:8001/api/v1';

const API = {
    // EVENTS
    async getEvents(filters = {}) {
        // Placeholder for fetch call
        // const query = new URLSearchParams(filters).toString();
        // const res = await fetch(`${API_BASE_URL}/events?${query}`);
        // return await res.json();

        // Mock Data for now
        return [
            {
                id: 1,
                title: "GLASGOW SOUND GALLERY",
                date: "2026-03-29",
                venue: "The Buff Club",
                price: 15,
                image: "assets/images/placeholder-event.jpg",
                category: "techno"
            },
            {
                id: 2,
                title: "NICK'S NIGHT 6.11",
                date: "2026-04-12",
                venue: "The Berkeley Suite",
                price: 12,
                image: "assets/images/placeholder-event.jpg",
                category: "techno"
            }
        ];
    },

    async getEventDetails(id) {
        // const res = await fetch(`${API_BASE_URL}/events/${id}`);
        // return await res.json();
        return {
            id: 1,
            title: "GLASGOW SOUND GALLERY",
            description: "Underground techno at its finest.",
            lineup: ["Burna Druma", "Fabian", "McMstr"]
        };
    },

    // AUTH
    async login(email, password) {
        /*
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password })
        });
        if (!res.ok) throw new Error('Login failed');
        return await res.json();
        */
        console.log('Logging in...', email);
        return { access_token: "mock_jwt_token", user: { name: "Test User" } };
    },

    async register(userData) {
        // Registration logic
    },

    // BOOKINGS
    async createBooking(bookingData) {
        // Create booking logic
        return { success: true, bookingId: "BK-123456" };
    }
};

window.API = API;
