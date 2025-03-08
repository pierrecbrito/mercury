import React, {useEffect, useState} from "react";
import './ChatPage.css';
import { getUser } from "../../services/userService";
import { MeResponse } from "../../types/auth";


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
    <div className="app-container">
        <div>
          <span>{user.username}</span>
        </div>
    </div>
  );
}

export default ChatPage;