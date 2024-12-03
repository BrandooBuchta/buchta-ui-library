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

const SalesPage: React.FC<SalesPageProps> = ({
  flow = "row",
  header,
  title,
  subTitle,
  landingButtons,
  videoButtons,
  storyButtons,
  referenceButtons,
  content,
  story,
  warningBar,
  references,
  promise,
  guarantee,
  actionButtons,
  footer,
  fomo,
  callToAction,
  shouldBeHeaderInContainer
}) => {
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
            <div className="flex gap-2 justify-center">{landingButtons}</div>
            <div className="my-16 flex justify-center flex-col items-center gap-5">
              {content}

              {videoButtons}
            </div>
          </div>
        ) : (
          <div className="flex my-20">
            <div className="w-1/2 gap-3 flex flex-col p-3">
              {title}
              {subTitle}
              <div className="flex gap-2 justify-center">{landingButtons}</div>
            </div>
            {content}
          </div>
        )}
        <div>{story}</div>
        <div className="flex justify-center gap-2">{storyButtons}</div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          {references}
        </div>
        <div className="flex justify-center">{referenceButtons}</div>
        <div className="flex flex-col items-center my-16 gap-3">
          {promise}
          {guarantee}
        </div>
        <div className="my-10">{fomo}</div>
        {callToAction}
        <div className="flex justify-center gap-2">{actionButtons}</div>
      </div>
      {footer}
    </div>
  );
};

export default SalesPage;
