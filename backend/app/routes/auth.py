from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
from ..models.user import User
from ..database import users_collection
import os
import hashlib
import jwt
from datetime import datetime, timedelta

load_dotenv()
SECRET_KEY = os.environ.get("SECRET_KEY") 
ALGORITHM = os.environ.get("ALGORITHM")

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.now(datetime.timezone.utc) + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

auth_router = APIRouter()
@auth_router.post("/register")
def register_user(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="User already exists")
    
    user.password_hash = hashlib.sha256(user.password_hash.encode()).hexdigest()
    result = users_collection.insert_one(user.model_dump())
    return {"message": "User registered successfully"}

@auth_router.post("/login")
def login_user(user: User):
    user.password_hash = hashlib.sha256(user.password_hash.encode()).hexdigest()
    user = users_collection.find_one(user.model_dump())
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "User logged in successfully"}