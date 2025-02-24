from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Conversation(BaseModel):
    id: str  
    name: Optional[str] = None  
    description: Optional[str] = None  
    is_group: bool 
    created_at: datetime
