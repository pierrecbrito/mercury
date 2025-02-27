import React from "react";
import './HomePage.css';
import MenuHomePage from "../MenuHomePage/MenuHomePage";

const bgBanner = require('../../assets/img/bg-banner.png');

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
        <MenuHomePage />
        <div className="section" id="section-banner">
            <h2 className="title-1">Connect. Chat. Inspire.</h2>
            <p className="subtitle-1">Seamless messaging, secure connections, and endless possibilities—all in one place.</p>
        </div>
       <img src={bgBanner} alt="Banner" className="img-banner"/>
    </div>
  );
}

export default HomePage;