import React from "react";
import { FooterSection } from "@/interfaces/utils";
export interface FooterProps {
    sections: FooterSection[];
    companyName: string;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
