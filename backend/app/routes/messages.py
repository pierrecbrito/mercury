from fastapi import APIRouter, Depends, HTTPException, status
from bson import ObjectId
from ..database import messages_collection
from ..main import get_current_user
import datetime

messages_router = APIRouter(tags=["Messages"])

@messages_router.get("/messages")
async def get_messages(current_user: dict = Depends(get_current_user)):
    messages = messages_collection.find()
    return {
        "messages": [parse_message(message) for message in messages]
    }

@messages_router.get("/messages/{message_id}")
async def get_message(message_id: str, current_user: dict = Depends(get_current_user)):
    message = messages_collection.find_one({"_id": ObjectId(message_id)})
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found")
    return parse_message(message)
    
@messages_router.post("/messages")
async def create_message(message: dict, current_user: dict = Depends(get_current_user)):
    message["sent_at"] = datetime.now()
    result = messages_collection.insert_one(message)
    message["id"] = str(result.inserted_id)
    return parse_message(message)

def parse_message(message):
    """Helper para converter ObjectId para string"""
    message["id"] = str(message["_id"])
    del message["_id"]
    return message