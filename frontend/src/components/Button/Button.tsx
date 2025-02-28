import React from "react";
import './Button.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className="button">
       {text}
    </div>
  );
}

export default Button;