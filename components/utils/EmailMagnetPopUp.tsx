import React, { useState, FC } from "react";

interface EmailMagnetPopUpProps {
  children?: JSX.Element | JSX.Element[] | string;
  content?: JSX.Element | JSX.Element[] | string;
  texts?: JSX.Element | JSX.Element[] | string;
  form?: JSX.Element | JSX.Element[] | string;
}

const EmailMagnetPopUp: FC<EmailMagnetPopUpProps> = ({
  children,
  content,
  texts,
  form,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{children}</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <button
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl z-10 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <div className="flex flex-col-reverse lg:flex-row">
                {content}
                {texts}
              </div>
              <div className="flex flex-col w-full mt-6">{form}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailMagnetPopUp;
