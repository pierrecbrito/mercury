import React from "react";
import { Link } from "react-router-dom";
import './MenuHomePage.css';

const MenuHomePage: React.FC = () => {
  return (
    <div className="menu-container">
        <ul className="menu-list">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/">Platform</Link></li>
            <li className="menu-item"><Link to="/">Pricing</Link></li>
            <li className="menu-item"><Link to="/">Carrers</Link></li>
            <li className="menu-item"><Link to="/login">Login</Link></li>
        </ul>
    </div>
  );
}

export default MenuHomePage;