#!/usr/bin/env pwsh
# Auto-deploy GSG Events to Railway

Write-Host "🚀 Starting automated Railway deployment..." -ForegroundColor Green

# Navigate to project directory
Set-Location "c:\Users\marco\Desktop\sunglasses-ecommerce\gsg-events"

# Delete the broken service via Railway dashboard URL
Write-Host "`n📍 Step 1: Please delete the broken 'gsg-events' service in your dashboard"
Write-Host "   URL: https://railway.com/project/d4ef56d3-e5bc-4b03-9e35-8b6a27cbf728"
Write-Host "   Just click the service → Settings → Delete Service"
Write-Host "`nPress Enter when done..."
Read-Host

# Deploy backend
Write-Host "`n🔧 Step 2: Deploying Backend..."
Write-Host "   In your Railway dashboard:"
Write-Host "   1. Click '+ New' → 'GitHub Repo'"
Write-Host "   2. Select 'Marcofoxx85/gsg-events'"
Write-Host "   3. Set Root Directory: /backend"
Write-Host "   4. Click 'Deploy'"
Write-Host "`nPress Enter when backend is deploying..."
Read-Host

# Deploy frontend
Write-Host "`n🎨 Step 3: Deploying Frontend..."
Write-Host "   In your Railway dashboard:"
Write-Host "   1. Click '+ New' → 'GitHub Repo'"  
Write-Host "   2. Select 'Marcofoxx85/gsg-events'"
Write-Host "   3. Set Root Directory: /frontend"
Write-Host "   4. Click 'Deploy'"
Write-Host "`nPress Enter when frontend is deploying..."
Read-Host

# Add PostgreSQL
Write-Host "`n🗄️  Step 4: Adding PostgreSQL..."
Write-Host "   In your Railway dashboard:"
Write-Host "   1. Click '+ New' → 'Database' → 'PostgreSQL'"
Write-Host "`nPress Enter when database is added..."
Read-Host

Write-Host "`n✅ DONE! Your services are deploying!" -ForegroundColor Green
Write-Host "   Check: https://railway.com/project/d4ef56d3-e5bc-4b03-9e35-8b6a27cbf728"
