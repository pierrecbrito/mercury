from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Message(BaseModel):
    id: str
    conversation_id: str
    sender: str
    content: str
    attachment_url: Optional[str] = None
    sent_at: datetime