import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import ChatPage from './components/ChatPage/ChatPage';
import PrivateRoute from './components/PrivateRoute/PrivatRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/app" element={
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
