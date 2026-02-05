# Railway Deployment Guide for GSG Events Platform

This guide provides step-by-step instructions for deploying the Glasgow Sound Gallery Events platform to Railway.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **Railway CLI**: Install the Railway CLI
   ```bash
   # Windows (PowerShell)
   iwr https://railway.app/install.ps1 | iex
   
   # Or use npm
   npm install -g @railway/cli
   ```

## Deployment Steps

### 1. Login to Railway

```bash
railway login
```

This will open a browser window for authentication.

### 2. Initialize Railway Project

Navigate to your project directory and initialize:

```bash
cd c:\Users\marco\Desktop\sunglasses-ecommerce\gsg-events
railway init
```

Follow the prompts to create a new project or link to an existing one.

### 3. Add PostgreSQL Database

```bash
railway add --database postgres
```

This creates a PostgreSQL database service in your Railway project.

### 4. Deploy Backend Service

```bash
cd backend
railway up
```

Railway will:
- Detect the Dockerfile
- Build the backend image
- Deploy the service
- Provide a URL for the backend API

**Set Environment Variables:**

After deployment, set the required environment variables:

```bash
railway variables set SECRET_KEY=your-super-secret-key-here
```

The `DATABASE_URL` is automatically set by Railway when you add the PostgreSQL database.

### 5. Deploy Frontend Service

Open a new terminal and navigate to the frontend directory:

```bash
cd c:\Users\marco\Desktop\sunglasses-ecommerce\gsg-events\frontend
railway up
```

Railway will:
- Detect the Dockerfile
- Build the frontend image
- Deploy the static files
- Provide a URL for the frontend

### 6. Link Services (Optional)

If you need the frontend to communicate with the backend, you can link them:

```bash
railway link
```

### 7. Get Service URLs

To get the URLs for your deployed services:

```bash
railway status
```

Or view them in the Railway dashboard at [railway.app/dashboard](https://railway.app/dashboard)

## Environment Variables Reference

### Backend Service

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string (auto-set by Railway) | `postgresql://user:pass@host:5432/db` |
| `SECRET_KEY` | Secret key for JWT tokens | `your-super-secret-key-here` |
| `PORT` | Port for the backend service (auto-set by Railway) | `8000` |

### Frontend Service

No environment variables required for the static frontend.

## Updating Your Deployment

To redeploy after making changes:

```bash
# For backend
cd backend
railway up

# For frontend
cd frontend
railway up
```

Or use:

```bash
railway up --detach
```

## Monitoring and Logs

View logs for your services:

```bash
railway logs
```

Or view them in the Railway dashboard.

## Troubleshooting

### Database Connection Issues

If the backend can't connect to the database:

1. Check that `DATABASE_URL` is set in the backend service
2. Verify the PostgreSQL service is running
3. Check logs: `railway logs`

### CORS Errors

If you encounter CORS errors:

1. Verify the backend CORS middleware allows your frontend domain
2. Check that the frontend is making requests to the correct backend URL

### Build Failures

If deployment fails:

1. Check the build logs in Railway dashboard
2. Verify Dockerfile syntax
3. Ensure all dependencies are listed in `requirements.txt`

## Next Steps

After successful deployment:

1. ✅ Test the backend API at `https://[backend-url].up.railway.app/docs`
2. ✅ Test the frontend at `https://[frontend-url].up.railway.app`
3. ✅ Verify database connectivity
4. ✅ Test the complete booking flow
5. 🔒 Set up custom domains (optional)
6. 🔒 Configure environment-specific settings

## Custom Domains (Optional)

To add a custom domain:

1. Go to your Railway dashboard
2. Select your service
3. Click "Settings" → "Domains"
4. Add your custom domain
5. Update your DNS records as instructed

## Cost Considerations

Railway offers:
- **Free tier**: $5 of usage per month
- **Pro plan**: $20/month + usage

Monitor your usage in the Railway dashboard to avoid unexpected charges.

## Support

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
- GSG Events Issues: Contact your development team
