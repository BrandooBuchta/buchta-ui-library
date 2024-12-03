import React from "react";
interface FormPageProps {
    warningBar?: JSX.Element | JSX.Element[] | string;
    texts?: JSX.Element | JSX.Element[] | string;
    form?: JSX.Element | JSX.Element[] | string;
    logo?: JSX.Element | JSX.Element[] | string;
    title?: JSX.Element | JSX.Element[] | string;
}
declare const FormPage: React.FC<FormPageProps>;
export default FormPage;
