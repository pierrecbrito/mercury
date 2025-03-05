import React from "react";
import './Button.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <div className="button" onClick={onClick}>
       {text}
    </div>
  );
}

export default Button;