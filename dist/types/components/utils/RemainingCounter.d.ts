import { FC } from "react";
interface RemainingCounterProps {
    title: string;
    subTitle: string;
    min: number;
    max: number;
    currentState: number;
}
declare const RemainingCounter: FC<RemainingCounterProps>;
export default RemainingCounter;
