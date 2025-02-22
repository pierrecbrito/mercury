from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class User(BaseModel):
    email: EmailStr
    password_hash: str
    refresh_token: Optional[str] = None
    created_at: datetime = datetime.now()
    updated_at: Optional[datetime] = None