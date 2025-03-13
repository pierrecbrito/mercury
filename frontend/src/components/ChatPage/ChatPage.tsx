import React, {useEffect, useState} from "react";
import './ChatPage.css';
import { getUser } from "../../services/userService";
import { MeResponse } from "../../types/auth";
import Button from "../Button/Button";
import { useUser } from "../../context/UserContext";
import ChatList from "../chat-list/ChatList";


const ChatPage: React.FC =  (props) => {
  const { user, setUser } = useUser();

  // Exemplo de logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-container">
        <div className="chat-container-header">
          <span className="chat-username-user">{user.username}</span>
          <Button onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }
          } text="Logout"/>
        </div>
        <div className="chat-container-body">
          <ChatList />
        </div>
    </div>
  );
}

export default ChatPage;