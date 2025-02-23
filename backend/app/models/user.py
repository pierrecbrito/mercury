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
        
        if len(username) < 3:
            raise ValueError("Username must be at least 3 characters long")
        
        if len(username) > 20:
            raise ValueError("Username must be at most 20 characters long")
        
        return username
        
        
    @field_validator('password_hash')
    @classmethod
    def validate_password(cls, password_hash):
        if not password_hash.strip():
            raise ValueError("password cannot be empty")
        
        if len(password_hash) < 8:
            raise ValueError("password must be at least 8 characters long")
        
        return password_hash
    
class UserCredentials(BaseModel):
    email: EmailStr
    password_hash: str

    @field_validator('email')
    @classmethod
    def validate_email(cls, email):
        if not email.strip():
            raise ValueError("Email cannot be empty")
        
        return email

    @field_validator('password_hash')
    @classmethod
    def validate_password(cls, password_hash):
        if not password_hash.strip():
            raise ValueError("password cannot be empty")
        
        return password_hash