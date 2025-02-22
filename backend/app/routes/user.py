from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
from ..models.user import User
import os

load_dotenv()

user_router = APIRouter()

@user_router.post("/register")
async def register_user(user: User):
    pass