import React from "react";
interface SalesPageProps {
    flow?: "col" | "row";
    header?: JSX.Element | JSX.Element[] | string;
    title: JSX.Element | JSX.Element[] | string;
    subTitle?: JSX.Element | JSX.Element[] | string;
    landingButtons?: JSX.Element | JSX.Element[] | string;
    videoButtons?: JSX.Element | JSX.Element[] | string;
    storyButtons?: JSX.Element | JSX.Element[] | string;
    actionButtons?: JSX.Element | JSX.Element[] | string;
    referenceButtons?: JSX.Element | JSX.Element[] | string;
    content?: JSX.Element | JSX.Element[] | string;
    story?: JSX.Element | JSX.Element[] | string;
    warningBar?: JSX.Element | JSX.Element[] | string;
    references?: JSX.Element[];
    promise?: JSX.Element | JSX.Element[] | string;
    guarantee?: JSX.Element | string;
    footer?: JSX.Element | JSX.Element[] | string;
    fomo?: JSX.Element;
    callToAction?: JSX.Element | JSX.Element[] | string;
    shouldBeHeaderInContainer?: boolean;
}
declare const SalesPage: React.FC<SalesPageProps>;
export default SalesPage;
