from fastapi import FastAPI
from app.routes.auth import auth_router
from app.routes.conversations import conversations_router
from app.routes.messages import messages_router

app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(conversations_router, tags=["conversations"])
app.include_router(messages_router, tags=["messages"])



@app.get("/test")
async def test_route():
    return {"message": "Hello World"}