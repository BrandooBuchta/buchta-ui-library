import React from "react";
interface LeadCapturePageProps {
    flow?: "col" | "row";
    header?: JSX.Element | JSX.Element[] | string;
    title: JSX.Element | JSX.Element[] | string;
    subTitle?: JSX.Element | JSX.Element[] | string;
    landingButtons?: JSX.Element | JSX.Element[] | string;
    actionButtons?: JSX.Element | JSX.Element[] | string;
    content?: JSX.Element | JSX.Element[] | string;
    warningBar?: JSX.Element | JSX.Element[] | string;
    references?: JSX.Element[];
    footer?: JSX.Element | JSX.Element[] | string;
    callToAction?: JSX.Element | JSX.Element[] | string;
    shouldBeHeaderInContainer?: boolean;
    callToActionPreTitle?: JSX.Element | JSX.Element[] | string;
    callToActionTitle?: JSX.Element | JSX.Element[] | string;
    callToActionSubTitle?: JSX.Element | JSX.Element[] | string;
}
declare const LeadCapturePage: React.FC<LeadCapturePageProps>;
export default LeadCapturePage;
