# Railway Deployment Guide - GSG Events

## Project URLs
- **GitHub Repository**: https://github.com/Marcofoxx85/gsg-events
- **Railway Project**: https://railway.com/project/d4ef56d3-e5bc-4b03-9e35-8b6a27cbf728

## Deployment Steps

### 1. Add PostgreSQL Database
1. Open your Railway project: https://railway.com/project/d4ef56d3-e5bc-4b03-9e35-8b6a27cbf728
2. Click **"+ New"** → **"Database"** → **"Add PostgreSQL"**
3. Wait for it to provision (takes ~30 seconds)

### 2. Deploy Backend
1. Click **"+ New"** → **"GitHub Repo"**
2. Select **"Marcofoxx85/gsg-events"**
3. **IMPORTANT**: Click **"Add Root Directory"** and enter: `/backend`
4. Click **"Add Service"**
5. Go to **Settings** tab:
   - **Service Name**: `backend`
   - Verify **Root Directory** shows `/backend`
6. Under **Deploy** section:
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
7. Go to **Variables** tab and add:
   - `DATABASE_URL`: `${{Postgres.DATABASE_URL}}` (reference the Postgres service)
   - `SECRET_KEY`: `your-secret-key-here`
8. The deployment will start automatically

### 3. Deploy Frontend
1. Click **"+ New"** → **"GitHub Repo"**
2. Select **"Marcofoxx85/gsg-events"**
3. **IMPORTANT**: Click **"Add Root Directory"** and enter: `/frontend`
4. Click **"Add Service"**
5. Go to **Settings** tab:
   - **Service Name**: `frontend`
   - Verify **Root Directory** shows `/frontend`
6. Railway will auto-detect the Dockerfile
7. The deployment will start automatically

### 4. Generate Domains
**Backend:**
1. Click on the **backend** service
2. Go to **Settings** → **Networking**
3. Click **"Generate Domain"**
4. Copy the URL (e.g., `backend-production-xxxx.up.railway.app`)

**Frontend:**
1. Click on the **frontend** service
2. Go to **Settings** → **Networking**
3. Click **"Generate Domain"**
4. Copy the URL (e.g., `frontend-production-xxxx.up.railway.app`)

### 5. Update Frontend API URL
Once you have the backend URL, update the frontend's API configuration:
1. Edit `frontend/js/api.js`
2. Change `API_URL` to your backend domain
3. Commit and push to GitHub
4. Railway will auto-redeploy

## Verification
- **Backend Health**: Visit `https://[backend-url]/docs`
- **Frontend**: Visit `https://[frontend-url]`
