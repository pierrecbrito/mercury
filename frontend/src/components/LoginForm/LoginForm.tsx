import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginForm.css';
import messages from "./JoinPageAnimation";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";
import { login } from "../../services/userService";
const logo = require('../../assets/img/logo-mercury.png');

interface LoginFormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const messageInterval = 3000; 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
        setVisibleMessages(prevMessages => {
            const nextMessageIndex = prevMessages.length;
            if (nextMessageIndex < messages.length) {
                return [...prevMessages, messages[nextMessageIndex]];
            } else {
                return [messages[0]]; // Reinicia a animação
            }
        });
    }, messageInterval);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    try {
      const authData = await login(email, password);
      setToken(authData.access_token);
      console.log('Token:', authData.access_token);
      localStorage.setItem('token', authData.access_token);
      navigate('/app');
    } catch(err) {
      setError('Email ou senha inválidos');
    }
  };

  const loginContainerClass = isLogin ? 'login-container' : 'login-container hidden';
  const registerContainerClass = isLogin ? 'register-container hidden' : 'register-container ';

  return (
      <div className="login-page">
        <div className={loginContainerClass}>
          <img className="logo" src={logo}/>
          <h2 className="title-3">Login</h2>
          <p className="text">Enter with your email and password to access your account</p>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter with your email account here"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter with your password account here"
              />
            </div>
            <Button text="Entrar" onClick={handleLogin} />
            {error && <p>{error}</p>}
            <div className="form-group">
              <div className="link" onClick={() => {setIsLogin(false)}}>Register here</div>
            </div>
            
          </form>
        </div>
        <div className={registerContainerClass}>
          <img className="logo" src={logo}/>
          <h2 className="title-3">Register</h2>
          <p className="text">Enter with your email and password to create your account</p>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter with your email account here"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter with your email account here"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter with your password account here"
              />
            </div>
            <div className="form-group">
              <label>Confirm password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter with your password account here"
              />
            </div>
            <Button text="Entrar" onClick={handleLogin} />
            {error && <p>{error}</p>}
            <div className="form-group">
              <div className="link" onClick={() => {setIsLogin(true)}}>Login here</div>
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