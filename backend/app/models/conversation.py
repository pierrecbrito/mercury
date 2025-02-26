from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from pydantic import field_validator, ValidationInfo

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

    @field_validator('participants')
    @classmethod
    def validate_participants(cls, participants: List[str], values: ValidationInfo) -> List[str]:
        is_group = values.data.get('is_group', False)

        # Validação para conversas não-grupo
        if not is_group and len(participants) != 2:
            raise ValueError("Conversas privadas devem ter exatamente 2 participantes")

        # Validação geral de mínimo de participantes
        if len(participants) < 2:
            raise ValueError("Toda conversa precisa de pelo menos 2 participantes")

        return participants

class ConversationResponse(BaseModel):
    conversation: Conversation
    participants: List[str]