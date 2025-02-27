import React from "react";
import './MessageFloat.css';

interface MessageFloatProps {
    image: string;
    profileName: string;
    message: string;
    top: number;
    left: number;
}

const MessageFloat: React.FC<MessageFloatProps> = ({ image, profileName, message, top, left }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`
  };

  return (
    <div className="message-float" style={styles}>
        <div className="message-float-container-image">
            {image && <img src={image} alt="Message"/>}
        </div>
        <div className="message-float-container-data">
            <div className="message-float-sender">{profileName}</div>
            <div className="message-float-content">{message}</div>
        </div>
    </div>
  );
}

export default MessageFloat;