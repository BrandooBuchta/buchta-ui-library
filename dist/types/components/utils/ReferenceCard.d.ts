import React from "react";
export interface Reference {
    author: string;
    company: string;
    href: string;
    text: string;
    avatar: string;
    icon?: string | JSX.Element;
}
interface ReferenceCardProps {
    reference: Reference;
}
declare const ReferenceCard: React.FC<ReferenceCardProps>;
export default ReferenceCard;
