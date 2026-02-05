from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Glasgow Sound Gallery API",
    description="Backend API for GSG Events Platform",
    version="1.0.0"
)

# CORS Configuration
# Allow all origins for Railway deployment
# In production, you should restrict this to your specific Railway domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Railway domains will vary)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Glasgow Sound Gallery API", "status": "operational"}

@app.get("/api/v1/health")
async def health_check():
    return {"status": "ok"}
