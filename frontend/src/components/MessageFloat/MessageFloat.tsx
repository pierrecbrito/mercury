import React, { useRef, useLayoutEffect } from "react";
import './MessageFloat.css';

interface MessageFloatProps {
    image: string;
    profileName: string;
    message: string;
    top: number;
    left?: number;
    right?: number;
    stay?: boolean;
}

const MessageFloat: React.FC<MessageFloatProps> = ({ image, profileName, message, top, left, right, stay }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`
  };

  if (left) {
    styles.left = `${left}px`;
  } else {
    styles.right = `${right}px`;
  }

  const classs = stay ? 'message-float' : 'message-float no-stay';

  return (
    <div className={classs} style={styles}>
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