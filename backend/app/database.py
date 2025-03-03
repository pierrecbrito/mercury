from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()  
mongo_url = os.environ.get("MONGO_URL", "mongodb://localhost:27017/")
client = MongoClient(mongo_url)
db = client["mercury"]

users_collection = db["users"]
messages_collection = db["messages"]
conversation_collection = db["conversation"]
conversation_participant_collection = db["conversation_participant"]
message_read_collection = db["message_read"]