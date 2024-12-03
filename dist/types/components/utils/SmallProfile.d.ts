import React from "react";
interface SmallProfileProps {
    title: string;
    subtitle: string;
    avatar: string | JSX.Element;
    icon?: JSX.Element;
    fallback: string;
}
declare const SmallProfile: React.FC<SmallProfileProps>;
export default SmallProfile;
