import React from "react";

interface FormPageProps {
  warningBar?: JSX.Element | JSX.Element[] | string;
  texts?: JSX.Element | JSX.Element[] | string;
  form?: JSX.Element | JSX.Element[] | string;
  logo?: JSX.Element | JSX.Element[] | string;
  title?: JSX.Element | JSX.Element[] | string;
}

const FormPage: React.FC<FormPageProps> = ({
  warningBar,
  texts,
  form,
  logo,
  title,
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-full">
        <div className="w-full">{warningBar}</div>
        <div className="container px-8 mx-auto mt-16">
          {title}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mx-7 pt-3 lg:w-1/2 w-full">{texts}</div>
            {form}
          </div>
        </div>
      </div>
      <div className="py-10">{logo}</div>
    </div>
  );
};

export default FormPage;
