import React from "react";
import './HomePage.css';
import MenuHomePage from "../MenuHomePage/MenuHomePage";
import MessageFloat from "../MessageFloat/MessageFloat";

const bgBanner = require('../../assets/img/bg-banner.png');
const profile1 = require('../../assets/img/profile-2.jpg');

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
        <MenuHomePage />
        <div className="section" id="section-banner">
            <h2 className="title-1">Messaging Made Simple</h2>
            <p className="subtitle-1">Seamless messaging, secure connections, and endless possibilities—all in one place.</p>
            <MessageFloat image={profile1}/>
        </div>
       <img src={bgBanner} alt="Banner" className="img-banner"/>
    </div>
  );
}

export default HomePage;