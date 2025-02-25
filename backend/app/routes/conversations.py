from fastapi import APIRouter, HTTPException, Depends, status
from database import conversation_collection, conversation_participant_collection
from ..models.conversation import Conversation
from ..main import get_current_user
from bson import ObjectId

conversations_router = APIRouter(tags=["Conversations"])


@conversations_router.get("/conversations")
async def get_conversations(current_user: dict = Depends(get_current_user)):
    user_mail = current_user["email"]

    conversations = conversation_collection.find({"participants": user_mail}).sort("created_at", -1)
    
    return { 
        "conversations": [parse_conversation(conversation) for conversation in conversations]
    }

@conversations_router.get("/conversations/{conversation_id}")
async def get_conversation(conversation_id: str, current_user: dict = Depends(get_current_user)):
    user_mail = current_user['mail']

    conversation = conversation_collection.find_one({"_id": ObjectId(conversation_id), "participants": user_mail})
    if conversation is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Conversation not found")

    return parse_conversation(conversation)

@conversations_router.post("/conversations")
async def create_conversation(current_user: dict = Depends(get_current_user)):
    user_mail = current_user["email"]
    conversation.participants.append(user_mail)
    conversation_id = conversation_collection.insert_one(conversation.model_dump()).inserted_id

    return { "id": str(conversation_id) }


def parse_conversation(conversation):
    """Helper para converter ObjectId para string"""
    conversation["id"] = str(conversation["_id"])
    del conversation["_id"]
    return conversation

