# Complete Railway Deployment - Final Steps

## What We've Done So Far
✅ Created Railway project: `gsg-events`
✅ Added PostgreSQL database
✅ Set environment variable `SECRET_KEY` for backend
✅ Uploaded code for both backend and frontend
✅ Created all necessary configuration files (Dockerfiles, railway.json, nixpacks.toml)

## What You Need to Do Now

Since the Railway CLI requires services to be created through the dashboard first, please follow these steps:

### Option 1: Use Railway Dashboard (Recommended)

1. **Open the Railway Dashboard**
   - Go to: https://railway.com/project/83e6cf47-cea7-47f4-a7b4-3e4b1e9bfb11
   - You should see your `gsg-events` project with a PostgreSQL service

2. **Create Backend Service**
   - Click **"+ New"** button
   - Select **"Empty Service"**
   - Once created, click on the new service
   - Go to **Settings** tab
   - Under **Service Name**, rename it to `backend`
   - Under **Source**, click **"Connect Repo"** or use the CLI:
     ```bash
     cd c:\Users\marco\Desktop\sunglasses-ecommerce\gsg-events\backend
     railway up
     ```
   - Go to **Settings** → **Networking** → Click **"Generate Domain"**
   - **Copy the backend URL** (e.g., `https://backend-production-xxxx.up.railway.app`)

3. **Create Frontend Service**
   - Click **"+ New"** button again
   - Select **"Empty Service"**
   - Once created, click on the new service
   - Go to **Settings** tab
   - Under **Service Name**, rename it to `frontend`
   - Use the CLI to deploy:
     ```bash
     cd c:\Users\marco\Desktop\sunglasses-ecommerce\gsg-events\frontend
     railway up
     ```
   - Go to **Settings** → **Networking** → Click **"Generate Domain"**
   - **Copy the frontend URL** (e.g., `https://frontend-production-xxxx.up.railway.app`)

4. **Verify Environment Variables (Backend Service)**
   - Click on the `backend` service
   - Go to **Variables** tab
   - Ensure these are set:
     - `DATABASE_URL` (should be auto-linked from PostgreSQL)
     - `SECRET_KEY` = `gsg-super-secret-key-production-2026`
   - If `DATABASE_URL` is missing, click **"+ New Variable"** → **"Add Reference"** → Select PostgreSQL → `DATABASE_URL`

### Option 2: Use GitHub Integration (Alternative)

If you prefer, you can:
1. Push your code to a GitHub repository
2. In Railway dashboard, click **"+ New"** → **"GitHub Repo"**
3. Select your repository
4. Railway will auto-detect the Dockerfiles and deploy

## Testing Your Deployment

Once both services are deployed with public domains:

**Backend API:**
```bash
curl https://[your-backend-url].up.railway.app/
# Expected: {"message": "Welcome to Glasgow Sound Gallery API", "status": "operational"}

curl https://[your-backend-url].up.railway.app/api/v1/health
# Expected: {"status": "ok"}
```

**Frontend:**
- Open `https://[your-frontend-url].up.railway.app/` in your browser
- You should see the GSG Events homepage with the neon green (#D4FF00) design

## Your Final URLs

After deployment, you'll have:
- **Frontend**: `https://frontend-production-xxxx.up.railway.app`
- **Backend API**: `https://backend-production-xxxx.up.railway.app`
- **API Docs**: `https://backend-production-xxxx.up.railway.app/docs`
- **Database**: Internal (connected automatically)

## Need Help?

If you encounter any issues:
1. Check the **Deployments** tab in each service for build logs
2. Check the **Logs** tab for runtime errors
3. Ensure the Dockerfiles are being detected (should show "Dockerfile" as the builder)
4. Verify environment variables are set correctly

## Project Dashboard
https://railway.com/project/83e6cf47-cea7-47f4-a7b4-3e4b1e9bfb11
