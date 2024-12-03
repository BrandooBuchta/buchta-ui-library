import React from "react";

interface ThankYouPageProps {
  warningBar?: JSX.Element | JSX.Element[] | string;
  texts?: JSX.Element | JSX.Element[] | string;
  content?: JSX.Element | JSX.Element[] | string;
  logo?: JSX.Element | JSX.Element[] | string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({
  warningBar,
  texts,
  content,
  logo,
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-full">{warningBar}</div>
      <div className="container px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mx-7 pt-3 lg:w-1/2 w-full">{texts}</div>
          {content}
        </div>
      </div>
      <div className="py-10">{logo}</div>
    </div>
  );
};

export default ThankYouPage;
