# Glasgow Sound Gallery — Project Audit

**Branch:** creon/initial-setup  
**Date:** 2025  
**Status:** Ready for backend implementation

## Stack Overview

| Layer | Technology | Status |
|-------|-----------|--------|
| **Frontend** | Nginx + HTML5/CSS3/JS | ✅ UI Complete |
| **Backend** | FastAPI + PostgreSQL | ⚠️ Skeletal (2 endpoints) |
| **Auth** | JWT (python-jose + passlib) | 📋 Ready to implement |
| **Payments** | Stripe (v7.13.0) | 📋 Ready to implement |
| **Deployment** | Docker + Railway | ✅ Configured |

## Frontend Assessment

✅ **Status:** Production-ready  
- Neon Dark design language (#D4FF00 accent)
- 4 main pages: index, event details, booking, admin
- Mobile-responsive CSS (breakpoint: 768px)
- Vanilla JS (no frameworks — clean and lightweight)
- API layer stubbed (frontend/js/api.js waiting for endpoints)

## Backend Assessment

⚠️ **Status:** Needs implementation  
- **Current endpoints:** `/` (root), `/health` (health check)
- **Missing:**
  - Events CRUD (GET /events, POST /events, GET /events/:id, etc.)
  - Auth (POST /auth/register, POST /auth/login, token refresh)
  - Bookings (GET /bookings, POST /bookings, etc.)
  - Payments (POST /payments/create-session for Stripe)
  - Database models (Event, User, Booking, Payment)
  - Database migrations (Alembic configured, not run)

## Deployment Status

✅ **Docker:** Both Dockerfiles ready  
✅ **Railway:** Config files present (railway.json + frontend/railway.json)  
⚠️ **Database:** PostgreSQL service needs to be created in Railway  
⚠️ **Environment variables:** Need to be set (DATABASE_URL, STRIPE_KEY, JWT_SECRET, etc.)

## Next Steps (Recommended Order)

1. Implement database models (SQLAlchemy ORM)
2. Run Alembic migrations
3. Build auth endpoints (register, login, refresh token)
4. Build events CRUD
5. Build bookings CRUD
6. Integrate Stripe payment session
7. Test API with frontend
8. Deploy to Railway (set env vars first)

## Dependencies Check

✅ All packages in requirements.txt are current  
✅ Python 3.11 specified (good for FastAPI async)  
✅ Stripe, JWT, PostgreSQL drivers all present

---

**Recommendation:** Start with database schema + auth. Auth is the gating mechanism for everything else.
