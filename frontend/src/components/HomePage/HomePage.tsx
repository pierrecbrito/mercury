import React, {useState, useEffect} from "react";
import './HomePage.css';
import MenuHomePage from "../MenuHomePage/MenuHomePage";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";

const bgBanner = require('../../assets/img/bg-banner.png');
const profile1 = require('../../assets/img/profile-2.jpg');
const profile2 = require('../../assets/img/profile-3.jpg');
const profile3 = require('../../assets/img/profile-4.jpg');
const profile4 = require('../../assets/img/profile-5.jpg');

const messages = [
    { type: "app-chat-message-2", text: "Yo, what's up?" },
    { type: "app-chat-message-1", text: "Not much, just chilling. You?" },
    { type: "app-chat-message-2", text: "Same here. Bored as hell." },
    { type: "app-chat-message-1", text: "Haha, I feel you. Wanna play something?" },
    { type: "app-chat-message-2", text: "Maybe later. I just ate and now I’m in that lazy mode." },
    { type: "app-chat-message-1", text: "Bro, I know that feeling. Food coma is real." }
];


const HomePage: React.FC = () => {
    const [chatMessages, setChatMessages] = useState<{ type: string, text: string }[]>([]);
    useEffect(() => {
        const interval = setInterval(() => {
            setChatMessages((prevMessages) => {
                const nextMessageIndex = prevMessages.length;
                if (nextMessageIndex < messages.length) {
                return [...prevMessages, messages[nextMessageIndex]];
                } else {
                clearInterval(interval);
                return prevMessages;
                }
            });
            }, 1000);
        return () => clearInterval(interval);
    }, []);

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

        <div className="section" id="section-app">
            <div className="title-subtitle">
              <h2 className="title-2">Revolutionizing Messaging: Features That Stand Out</h2>
              <p className="subtitle-1">Discover the powerful tools designed to enhance your communication experience.</p>
            </div>
            <div className="container">
                <div className="app-chat-features">
                    <div className="app-chat-feature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                        <h3 className="title-3">Real Time</h3>
                        <p className="text">
                            Stay connected with real-time messaging, and never miss a beat.
                        </p>
                    </div>
                    <div className="app-chat-feature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect></svg>
                        <h3 className="title-3">Intuitive UI</h3>
                        <p className="text">
                            Our user-friendly interface makes messaging a breeze.
                        </p>
                    </div>
                    <div className="app-chat-feature">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><filter id="svgSpinnersGooeyBalls10"><feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1.5"/><feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"/><feBlend in="SourceGraphic" in2="z"/></filter></defs><g fill="currentColor" filter="url(#svgSpinnersGooeyBalls10)"><circle cx="4" cy="12" r="3"><animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="4;9;4"/><animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="3;8;3"/></circle><circle cx="15" cy="12" r="8"><animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="15;20;15"/><animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="8;3;8"/></circle></g></svg>
                        <h3 className="title-3">Message Editing and Deletion</h3>
                        <p className="text">
                            Correct mistakes and remove messages with ease.
                        </p>
                    </div>
                </div>
                <div className="app-chat-container">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={msg.type}>
                        <span>{msg.text}</span>
                      </div>
                    ))}
                </div>
            </div>
        </div>

       <img src={bgBanner} alt="Banner" className="img-banner"/>
    </div>
  );
}

export default HomePage;