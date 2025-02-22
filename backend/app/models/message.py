from pydantic import BaseModel
from datetime import datetime

class Message(BaseModel):
    user_id: str
    thread_id: str
    sender: str
    content: str
    timestamp: datetime