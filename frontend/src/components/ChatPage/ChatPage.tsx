import React, {useEffect, useState} from "react";
import './ChatPage.css';
import { getUser } from "../../services/userService";
import { MeResponse } from "../../types/auth";
import Button from "../Button/Button";


const ChatPage: React.FC =  (props) => {
  const [user, setUser] = useState<MeResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token') || '';
      const userData = await getUser(token);
      setUser(userData);
    };

    fetchUser();
  }, []);

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
          
        </div>
    </div>
  );
}

export default ChatPage;