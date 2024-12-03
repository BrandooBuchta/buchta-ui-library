export interface FooterSectionItem {
    key?: string;
    value?: string;
    icon?: JSX.Element;
    href?: string;
    fn?: () => void;
}
export interface FooterSection {
    title: string;
    sections: FooterSectionItem[];
    orientation?: "vertical" | "horizontal";
}
