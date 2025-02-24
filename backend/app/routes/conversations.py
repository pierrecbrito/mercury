from fastapi import APIRouter, HTTPException, Depends, status
from database import conversation_collection
from ..models.conversation import Conversation
from ..main import get_current_user

conversations_router = APIRouter(tags=["Conversations"])


@conversations_router.get("/conversations")
async def get_conversations(current_user: dict = Depends(get_current_user)):
    user_mail = current_user["email"]

    conversations = conversation_collection.find({"participants": user_mail}).sort("created_at", -1)
    
    return { 
        "conversations": [parse_conversation(conversation) for conversation in conversations]
    }

def parse_conversation(conversation):
    """Helper para converter ObjectId para string"""
    conversation["id"] = str(conversation["_id"])
    del conversation["_id"]
    return conversation