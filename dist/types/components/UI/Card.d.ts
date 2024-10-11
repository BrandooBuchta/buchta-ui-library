import { CSSProperties, FC } from "react";
interface CardProps {
    children: JSX.Element | JSX.Element[] | string;
    width?: string;
    height?: string;
    padding?: string;
    variant?: "bordered" | "shadow" | "faded";
    className?: string;
    style?: CSSProperties;
}
declare const Card: FC<CardProps>;
export default Card;
