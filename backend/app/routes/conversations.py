from fastapi import APIRouter, HTTPException, Depends, status
from ..database import conversation_collection, conversation_participant_collection
from ..models.conversation import Conversation, ConversationResponse, CreateConvesationRequest
from .auth import get_current_user
from bson import ObjectId
import datetime

conversations_router = APIRouter(prefix='/convesations', tags=["Conversations"])


@conversations_router.get("/")
async def get_conversations(current_user: dict = Depends(get_current_user)):
    user_mail = current_user["email"]

    conversations = conversation_collection.find({"participants": user_mail}).sort("created_at", -1)
    
    return { 
        "conversations": [parse_conversation(conversation) for conversation in conversations]
    }

@conversations_router.get("/{conversation_id}")
async def get_conversation(conversation_id: str, current_user: dict = Depends(get_current_user)):
    user_mail = current_user['mail']

    conversation = conversation_collection.find_one({"_id": ObjectId(conversation_id), "participants": user_mail})
    if conversation is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Conversation not found")

    return parse_conversation(conversation)

@conversations_router.post("/")
async def create_conversation(request: CreateConvesationRequest):

    conversation_data = {
        "name": request.name,
        "description": request.description,
        "is_group": request.is_group,
        "created_at": datetime.datetime.now(),
    }

    conversation_result = conversation_collection.insert_one(conversation_data)
    conversation_id = str(conversation_result.inserted_id)

    participants = []
    for user_id in request.additional_participants:
        participant = {
            "conversation_id": conversation_id,
            "user_id": user_id,
            "joined_at": datetime.datetime.now()
        }
        conversation_participant_collection.insert_one(participant)
        participants.append(user_id)

    return {
        "conversation": Conversation(id=conversation_id, **conversation_data),
        "participants": participants
    }


def parse_conversation(conversation):
    """Helper para converter ObjectId para string"""
    conversation["id"] = str(conversation["_id"])
    del conversation["_id"]
    return conversation

