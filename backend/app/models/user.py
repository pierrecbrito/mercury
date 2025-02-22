from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
from datetime import datetime

class User(BaseModel):
    username: str
    email: EmailStr
    password_hash: str
    created_at: datetime = datetime.now()
    updated_at: Optional[datetime] = None

    @field_validator('username')
    @classmethod
    def validate_username(cls, username):
        if not username.strip():
            raise ValueError("Username cannot be empty")
        
    @field_validator('password_hash')
    @classmethod
    def validate_password(cls, password):
        if not password.strip():
            raise ValueError("password cannot be empty")
        
        if len(password) < 8:
            raise ValueError("password must be at least 8 characters long")