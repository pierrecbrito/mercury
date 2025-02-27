import React from "react";
import './MessageFloat.css';

const MessageFloat: React.FC = () => {
  return (
    <div className="message-float">
        <div className="message-float-container-image">

        </div>
        <div className="message-float-container-data">
            <div className="message-float-sender">Pierre Brito</div>
            <div className="message-float-content">Hello World!</div>
        </div>
    </div>
  );
}

export default MessageFloat;