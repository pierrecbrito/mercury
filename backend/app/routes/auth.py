from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
from dotenv import load_dotenv
from ..models.user import User, UserCredentials
from ..database import users_collection
import os
import hashlib
import jwt
from datetime import datetime, timedelta, timezone

load_dotenv()
SECRET_KEY = os.environ.get("SECRET_KEY") 
ALGORITHM = os.environ.get("ALGORITHM")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

auth_router = APIRouter(tags=["Authentication"])

def create_access_token(data: dict, expires_delta: timedelta = timedelta(hours=1)):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + expires_delta  # Usando timezone.utc corretamente
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
         status_code=status.HTTP_401_UNAUTHORIZED,
         detail="Could not validate credentials",
         headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except jwt.PyJWTError:
        raise credentials_exception
   
    user = users_collection.find_one({"email": email})
    if user is None:
        raise credentials_exception
    
    return user
    

@auth_router.post("/register")
def register_user(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="User already exists")

    user.password_hash = hashlib.sha256(user.password_hash.encode()).hexdigest()
    users_collection.insert_one(user.model_dump())
    return {"message": "User registered successfully"}

@auth_router.post("/login")
def login_user(user_data: UserCredentials):

    user_data.password_hash = hashlib.sha256(user_data.password_hash.encode()).hexdigest()
    user = users_collection.find_one({"email": user_data.email, "password_hash": user_data.password_hash})

    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": user["email"]})
    return {"access_token": access_token, "token_type": "bearer"}

@auth_router.get("/me")
async def read_current_user(current_user: User = Depends(get_current_user)):
    return {
        "email": current_user['email'],
        "username": current_user['username'],
        "created_at": current_user['created_at'],
    }


