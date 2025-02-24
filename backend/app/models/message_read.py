from pydantic import BaseModel
from datetime import datetime

class MessageRead(BaseModel):
    message_id: str
    user_id: str
    read_at: datetime
