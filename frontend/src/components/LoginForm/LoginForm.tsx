import React, { useState } from "react";
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
          {messages.map((message, index) => {
            return (
              <MessageFloat
                key={index}
                top={message.top}
                left={message.left}
                right={message.right}
                image={message.image}
                profileName={message.profileName}
                message={message.message}
              />
            );
          })}
        </div>
      );
}

export default LoginForm;