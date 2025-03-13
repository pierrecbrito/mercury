import React from "react";
import './ChatList.css';
import ChatResume from "../chat-resume/ChatResume";

interface ChatListProps {}

const ChatList: React.FC<ChatListProps> = () => {
  return (
    <div className="chat-list">
       <ChatResume /> 
    </div>
  );
}

export default ChatList;