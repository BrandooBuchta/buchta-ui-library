import { FC } from "react";
interface CountdownProps {
    title: JSX.Element | JSX.Element[] | string;
    subTitle: JSX.Element | JSX.Element[] | string;
    targetDate: string;
}
declare const Countdown: FC<CountdownProps>;
export default Countdown;
