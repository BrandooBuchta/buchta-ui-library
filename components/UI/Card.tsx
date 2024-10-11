import { useTheme } from "next-themes";
import { CSSProperties, FC } from "react";
import React from "react";

interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
  width?: string;
  height?: string;
  padding?: string;
  variant?: "bordered" | "shadow" | "faded";
  className?: string;
  style?: CSSProperties;
}

const Card: FC<CardProps> = ({
  children,
  width,
  height,
  padding,
  variant = "shadow",
  className,
  style: customStyle,
}) => {
  let style: CSSProperties = {
    width,
    height,
    padding,
    borderRadius: "15px",
  };

  const { theme } = useTheme();

  switch (variant) {
    case "shadow":
      style = {
        ...style,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme === "dark" ? "#18181b" : "#ffffff", // tmavě šedá
        border: `1px solid #${theme === "dark" ? "222" : "eee"}`, // světle šedý border
      };
      break;
    case "bordered":
      style = {
        ...style,
        border: `1px solid #${theme === "dark" ? "3f3f46" : "eee"}`, // světle šedý border
      };
      break;
    case "faded":
      style = {
        ...style,
        border: `1px solid #${theme === "dark" ? "3f3f46" : "eee"}`, // světle šedý border
        backgroundColor: theme === "dark" ? "#18181b" : "#ffffff", // tmavě šedá
      };
      break;
    default:
      break;
  }

  return (
    <div className={className} style={{ ...style, ...customStyle }}>
      {children}
    </div>
  );
};

export default Card;
