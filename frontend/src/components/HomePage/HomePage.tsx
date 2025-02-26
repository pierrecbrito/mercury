import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>
        <Link to="/login" className="login-link">Fazer Login</Link>
      </p>
    </div>
  );
}

export default HomePage;