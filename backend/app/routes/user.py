from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
from ..models.user import User
from ..database import users_collection
import os
import hashlib

load_dotenv()

user_router = APIRouter()

@user_router.post("/register")
async def register_user(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="User already exists")
    
    user.password_hash = hashlib.sha256(user.password_hash.encode()).hexdigest()
    result = users_collection.insert_one(user.dict())
    return {"message": "User registered successfully"}