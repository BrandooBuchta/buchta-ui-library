import React, { useState } from "react";

import Card from "../UI/Card";

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

const customForm = (
  <form>
    <input
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      placeholder="Váš E-Mail"
      type="email"
    />
    <button
      className="mt-4 w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-600 focus:ring-4 focus:ring-pink-500"
      type="submit"
    >
      Odeslat
    </button>
  </form>
);

const LeadCapturePage: React.FC<LeadCapturePageProps> = ({
  flow = "row",
  header,
  title,
  subTitle,
  callToActionPreTitle,
  callToActionTitle,
  callToActionSubTitle,
  content,
  warningBar,
  references,
  actionButtons,
  footer,
  callToAction,
  shouldBeHeaderInContainer,
}) => {
  const [email, setEmail] = useState<string>("");

  const onSubmit = () => {
    // Logic for submitting email, e.g., API call
    console.log("Email submitted: ", email);
  };

  return (
    <div>
      {warningBar}
      {!shouldBeHeaderInContainer && header}
      <div className="container mx-auto p-8">
        {shouldBeHeaderInContainer && header}
        {flow === "col" ? (
          <div className="flex flex-col items-center">
            {title}
            {subTitle}
            {callToAction}
            <div className="my-16 flex justify-center flex-col items-center gap-5">
              {content}
            </div>
          </div>
        ) : (
          <div className="flex my-20">
            <div className="w-1/2 gap-3 flex flex-col p-3">
              {title}
              {subTitle}
              {callToAction}
            </div>
            {content}
          </div>
        )}
        <Card className="flex flex-col justify-center items-center my-10 p-5 shadow-xl sm:rounded-full rounded-2xl bg-neutral-50">
          <>
            {callToActionPreTitle}
            {callToActionTitle}
            {callToActionSubTitle}
            {actionButtons}
          </>
        </Card>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          {references}
        </div>
      </div>
      {footer}
    </div>
  );
};

export default LeadCapturePage;
