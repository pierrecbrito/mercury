import React from "react";
import './ChatList.css';

interface ChatListProps {
    text: string;
    onClick?: () => void;
}

const ChatList: React.FC<ChatListProps> = () => {
  return (
    <div className="chat-list">
       
    </div>
  );
}

export default ChatList;