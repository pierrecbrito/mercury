import React from "react";
import './MessageFloat.css';

interface MessageFloatProps {
    image: string;
}

const MessageFloat: React.FC<MessageFloatProps> = ({ image }) => {
  return (
    <div className="message-float">
        <div className="message-float-container-image">
            {image && <img src={image} alt="Message"/>}
        </div>
        <div className="message-float-container-data">
            <div className="message-float-sender">Tommy Maguire</div>
            <div className="message-float-content">Hello World!</div>
        </div>
    </div>
  );
}

export default MessageFloat;