import { FC } from "react";
interface AccordionProps {
    items: {
        title: JSX.Element | JSX.Element[] | string;
        content: JSX.Element | JSX.Element[] | string;
    }[];
}
declare const Accordion: FC<AccordionProps>;
export default Accordion;
