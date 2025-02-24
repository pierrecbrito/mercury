from pydantic import BaseModel
from datetime import datetime

class ConversationParticipant(BaseModel):
    conversation_id: str
    user_id: str
    joined_at: datetime