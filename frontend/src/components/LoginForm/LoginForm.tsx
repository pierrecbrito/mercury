import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

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
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      );
}

export default LoginForm;