from fastapi import FastAPI
from app.routes.auth import auth_router

app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])

@app.get("/test")
async def test_route():
    return {"message": "Hello World"}