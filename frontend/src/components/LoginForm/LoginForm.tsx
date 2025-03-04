import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginForm.css';
import messages from "./JoinPageAnimation";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";

interface LoginFormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
    const messageInterval = 1000; // Intervalo em milissegundos (3 segundos)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleMessages(prevMessages => {
                const nextMessageIndex = prevMessages.length;
                if (nextMessageIndex < messages.length) {
                    return [...prevMessages, messages[nextMessageIndex]];
                } else {
                    clearInterval(interval);
                    return prevMessages;
                }
            });
        }, messageInterval);

        return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="login-page">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                />
              </div>
              <div className="form-group">
                <label>Senha:</label>
                <input
                  type="password"
                />
              </div>
              <Button text="Entrar" />
              <div className="form-group">
                <Link to="/join">Register here</Link>
              </div>
              
            </form>
          </div>
          {visibleMessages.map((message, index) => {
            return (
              <MessageFloat
                key={index}
                top={message.top}
                left={message.left}
                right={message.right}
                image={message.image}
                profileName={message.profileName}
                message={message.message}
                stay={false}
              />
            );
          })}
        </div>
      );
}

export default LoginForm;