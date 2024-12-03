import { FC } from "react";
import React from "react";
import Link from "next/link";

import FormPage from "@/components/page-templates/FormPage";
import { CountdownText, WarningBar } from "@/components";
import OfferForm from "@/components/mocks/OfferForm";

const FormPagePreview: FC = () => {
  return (
    <FormPage
      form={<OfferForm />}
      logo={
        <Link href="https://www.brandoo.cz" target="_blank">
          <img
            alt="brandoo-logo"
            className="w-[60px] md:w-[100px] mt-1"
            src="https://www.brandoo.cz/brandoo-logo-light.svg"
          />
        </Link>
      }
      texts={
        <>
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-pink-500">
            Pojďme si to shrnout!
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
            Domluvte si s námi konzultaci!
          </p>
          <ul className="list-disc mt-6 pl-5 mb-5 text-gray-600">
            <li className="mb-5">Výhoda 1</li>
            <li className="mb-5">Výhoda 2</li>
            <li className="mb-5">Výhoda 3</li>
          </ul>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300">
            Dokončit
          </button>
        </>
      }
      title={
        <h1 className="text-6xl text-center mb-10 font-bold">
          Pojďmě to spolu dotáhnout do konce!
        </h1>
      }
      warningBar={
        <WarningBar
          content={
            <>
              <b className="text-yellow-400 font-bold">POZOR!</b> Nabídka platí
              pouze do:
              <b className="text-yellow-400 font-bold">
                <CountdownText targetDate="2024-10-30" />
              </b>
            </>
          }
        />
      }
    />
  );
};

export default FormPagePreview;
