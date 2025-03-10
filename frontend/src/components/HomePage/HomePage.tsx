import React, {useState, useEffect} from "react";
import './HomePage.css';
import MenuHomePage from "../MenuHomePage/MenuHomePage";
import MessageFloat from "../MessageFloat/MessageFloat";
import Button from "../Button/Button";

const logo = require('../../assets/img/logo-mercury.png');
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
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        if (messageIndex === 0) {
            const timeout = setTimeout(() => {
                setChatMessages([messages[0]]);
                setMessageIndex(1);
            }, 4000);
            return () => clearTimeout(timeout);
        } else {
            const interval = setInterval(() => {
                setChatMessages((prevMessages) => {
                    if (messageIndex < messages.length) {
                        setMessageIndex(messageIndex + 1);
                        return [...prevMessages, messages[messageIndex]];
                    } else {
                        setMessageIndex(0); // Reinicia a animação
                        return [];
                    }
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [messageIndex]);

  return (
    <div className="home-container">
        <MenuHomePage />
        <div className="section" id="section-banner">
            <div className="title-subtitle">
              <img className="logo" src={logo}/>
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
        <div className="section" id="section-partners">
            <div className="title-subtitle">
              <h2 className="title-2">Partners</h2>
            </div>
            <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fff" d="M16.92 4.5c-1.851 0-3.298 1.394-4.608 3.165C10.512 5.373 9.007 4.5 7.206 4.5C3.534 4.5.72 9.28.72 14.338c0 3.165 1.531 5.162 4.096 5.162c1.846 0 3.174-.87 5.535-4.997c0 0 .984-1.737 1.66-2.934q.356.574.75 1.238l1.107 1.862c2.156 3.608 3.358 4.831 5.534 4.831c2.5 0 3.89-2.024 3.89-5.255c0-5.297-2.877-9.745-6.372-9.745m-8.37 8.886c-1.913 3-2.575 3.673-3.64 3.673c-1.097 0-1.749-.963-1.749-2.68c0-3.672 1.831-7.427 4.014-7.427c1.182 0 2.17.682 3.683 2.848c-1.437 2.204-2.307 3.586-2.307 3.586m7.224-.377L14.45 10.8a45 45 0 0 0-1.032-1.608c1.193-1.841 2.176-2.759 3.347-2.759c2.43 0 4.375 3.58 4.375 7.976c0 1.676-.549 2.649-1.686 2.649c-1.09 0-1.61-.72-3.68-4.05"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fff" d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fff" d="M20.562 10.188c.25-.688.313-1.376.25-2.063c-.062-.687-.312-1.375-.625-2c-.562-.937-1.375-1.687-2.312-2.125c-1-.437-2.063-.562-3.125-.312c-.5-.5-1.063-.938-1.688-1.25S11.687 2 11 2a5.17 5.17 0 0 0-3 .938c-.875.624-1.5 1.5-1.813 2.5c-.75.187-1.375.5-2 .875c-.562.437-1 1-1.375 1.562c-.562.938-.75 2-.625 3.063a5.44 5.44 0 0 0 1.25 2.874a4.7 4.7 0 0 0-.25 2.063c.063.688.313 1.375.625 2c.563.938 1.375 1.688 2.313 2.125c1 .438 2.062.563 3.125.313c.5.5 1.062.937 1.687 1.25S12.312 22 13 22a5.17 5.17 0 0 0 3-.937c.875-.625 1.5-1.5 1.812-2.5a4.54 4.54 0 0 0 1.938-.875c.562-.438 1.062-.938 1.375-1.563c.562-.937.75-2 .625-3.062c-.125-1.063-.5-2.063-1.188-2.876m-7.5 10.5c-1 0-1.75-.313-2.437-.875c0 0 .062-.063.125-.063l4-2.312a.5.5 0 0 0 .25-.25a.57.57 0 0 0 .062-.313V11.25l1.688 1v4.625a3.685 3.685 0 0 1-3.688 3.813M5 17.25c-.438-.75-.625-1.625-.438-2.5c0 0 .063.063.125.063l4 2.312a.56.56 0 0 0 .313.063c.125 0 .25 0 .312-.063l4.875-2.812v1.937l-4.062 2.375A3.7 3.7 0 0 1 7.312 19c-1-.25-1.812-.875-2.312-1.75M3.937 8.563a3.8 3.8 0 0 1 1.938-1.626v4.751c0 .124 0 .25.062.312a.5.5 0 0 0 .25.25l4.875 2.813l-1.687 1l-4-2.313a3.7 3.7 0 0 1-1.75-2.25c-.25-.937-.188-2.062.312-2.937M17.75 11.75l-4.875-2.812l1.687-1l4 2.312c.625.375 1.125.875 1.438 1.5s.5 1.313.437 2.063a3.7 3.7 0 0 1-.75 1.937c-.437.563-1 1-1.687 1.25v-4.75c0-.125 0-.25-.063-.312c0 0-.062-.126-.187-.188m1.687-2.5s-.062-.062-.125-.062l-4-2.313c-.125-.062-.187-.062-.312-.062s-.25 0-.313.062L9.812 9.688V7.75l4.063-2.375c.625-.375 1.312-.5 2.062-.5c.688 0 1.375.25 2 .688c.563.437 1.063 1 1.313 1.625s.312 1.375.187 2.062m-10.5 3.5l-1.687-1V7.063c0-.688.187-1.438.562-2C8.187 4.438 8.75 4 9.375 3.688a3.37 3.37 0 0 1 2.062-.313c.688.063 1.375.375 1.938.813c0 0-.063.062-.125.062l-4 2.313a.5.5 0 0 0-.25.25c-.063.125-.063.187-.063.312zm.875-2L12 9.5l2.187 1.25v2.5L12 14.5l-2.188-1.25z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fff" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fff" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"/></svg>
            </div>
        </div>

       <img src={bgBanner} alt="Banner" className="img-banner"/>
    </div>
  );
}

export default HomePage;