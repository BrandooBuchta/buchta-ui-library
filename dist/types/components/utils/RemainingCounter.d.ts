import { FC } from "react";
interface RemainingCounterProps {
    title: JSX.Element | JSX.Element[] | string;
    subTitle: JSX.Element | JSX.Element[] | string;
    bgColor?: string;
    min: number;
    max: number;
    currentState: number;
}
declare const RemainingCounter: FC<RemainingCounterProps>;
export default RemainingCounter;
