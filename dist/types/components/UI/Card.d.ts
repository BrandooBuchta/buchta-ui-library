import { FC } from "react";
interface CardProps {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
}
declare const Card: FC<CardProps>;
export default Card;
