import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginForm.css';
import messages from "./JoinPageAnimation";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";
import { login, register } from "../../services/userService";
const logo = require('../../assets/img/logo-mercury.png');

interface LoginFormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const messageInterval = 3000; 
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [errorRegister, setErrorRegister] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
      setErrorLogin('Email ou senha inválidos');
    }
  };

  const handleRegister = async () => {
    try {
      const authData = await register(username, email, password);
      const authLogin = await login(email, password);
      
      localStorage.setItem('token', authLogin.access_token);
      navigate('/app');
    } catch(err) {
      console.log(err);
      setErrorRegister('Email ou senha inválidos');
    }
  }

  const handleKeyDownEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      passwordRef.current?.focus();
    }
  };

  const handleKeyDownPassword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
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
            {errorLogin && <p>{errorLogin}</p>}
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter with your email account here"
                onKeyDown={handleKeyDownEmail}
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter with your password account here"
                onKeyDown={handleKeyDownPassword}
                ref={passwordRef}
              />
            </div>
            <Button text="Log In" onClick={handleLogin} />
            
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
            {errorRegister && <p>{errorRegister}</p>}
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter with your username account here"
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
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
                placeholder="Confirm your password account here"
              />
            </div>
            <Button text="Register" onClick={handleRegister} />
            
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