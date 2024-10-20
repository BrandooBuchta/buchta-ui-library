import React, { useState } from "react";

import ExitPopup from "../utils/ExitPopUp";
import Countdown from "../utils/Countdown";

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
}) => {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {warningBar}
      <div className="container mx-auto p-8">
        {showPopup && (
          <ExitPopup
            message="We have a special offer just for you!"
            title="Wait! Before you leave..."
            onClose={handleClosePopup}
          />
        )}
        {header}
        {flow === "col" ? (
          <div className="flex flex-col items-center">
            {title}
            {subTitle}
            {landingButtons}
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
              {landingButtons}
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
        <div className="my-10">
          <Countdown
            subTitle="Rada a vypracování toho co vám bude fungovat není bezcená - proto tato nabídka platí pouze do konce měsíce! ⏳"
            targetDate={"2024-10-30"}
            title="Cenová nabídka ZDARMA"
          />
        </div>
        <div className="mx-auto text-lg text-center max-w-[1000px]">
          Posuňte svůj byznys na novou úroveň s námi! Vyplňte krátký formulář a
          získejte cenovou nabídku na míru ZDARMA. Ukážeme vám, co může skutečně
          nastartovat váš růst. Stačí kliknout níže a my se o zbytek postaráme!
        </div>
        <div className="flex justify-center gap-2">{actionButtons}</div>
      </div>
      {footer}
    </div>
  );
};

export default SalesPage;
