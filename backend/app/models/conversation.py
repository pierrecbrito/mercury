from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Conversation(BaseModel):
    id: str  
    name: Optional[str] = None  
    description: Optional[str] = None  
    is_group: bool 
    created_at: datetime

class CreateConvesationRequest(BaseModel):
    name: Optional[str] = None  
    description: Optional[str] = None  
    is_group: bool 
    additional_participants: List[str]

class ConversationResponse(BaseModel):
    conversation: Conversation
    participants: List[str]