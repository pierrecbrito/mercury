import React from "react";
import './HomePage.css';
import MenuHomePage from "../MenuHomePage/MenuHomePage";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";

const bgBanner = require('../../assets/img/bg-banner.png');
const profile1 = require('../../assets/img/profile-2.jpg');
const profile2 = require('../../assets/img/profile-3.jpg');
const profile3 = require('../../assets/img/profile-4.jpg');
const profile4 = require('../../assets/img/profile-5.jpg');


const HomePage: React.FC = () => {
  return (
    <div className="home-container">
        <MenuHomePage />
        <div className="section" id="section-banner">
            <div className="title-subtitle">
              <h2 className="title-1">Messaging Made Simple</h2>
              <p className="subtitle-1">Seamless messaging, secure connections, and endless possibilities—all in one place.</p>
            </div>
            <Button text="Get Started"/>
            <MessageFloat top={150} left={90} image={profile1} profileName="Claus Maverick" message="Hello World! I'm tommy and this is a great app for contact."/>
            <MessageFloat top={400} left={170} image={profile2} profileName="André Mendes" message="Amazing platform! Mercury is my go-to for all messages!"/>
            <MessageFloat top={150} right={150} image={profile3} profileName="Jhon Jovi" message="Mercury makes communication easy and super efficient!"/>
            <MessageFloat top={500} right={180} image={profile4} profileName="Albert Messon" message="The best messaging platform I've ever used, hands down!"/>
        </div>
       <img src={bgBanner} alt="Banner" className="img-banner"/>
    </div>
  );
}

export default HomePage;