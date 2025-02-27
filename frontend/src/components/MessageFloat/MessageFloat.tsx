import React from "react";
import './MessageFloat.css';

interface MessageFloatProps {
    image: string;
    profileName: string;
    message: string;
    top: number;
    left?: number;
    right?: number;
}

const MessageFloat: React.FC<MessageFloatProps> = ({ image, profileName, message, top, left, right }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`
  };

  if (left) {
    styles.left = `${left}px`;
  } else {
    styles.right = `${right}px`;
  }

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