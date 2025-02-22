from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class User(BaseModel):
    username: str
    email: EmailStr
    password_hash: str
    created_at: datetime = datetime.now()
    updated_at: Optional[datetime] = None