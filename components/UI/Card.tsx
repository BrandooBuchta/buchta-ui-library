import React, { FC } from "react";

interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
