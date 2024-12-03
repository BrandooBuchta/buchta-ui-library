import { FC } from "react";
import React from "react";

import ThankYouPage from "@/components/page-templates/ThankYouPage";
import { CountdownText, WarningBar } from "@/components";
import Link from "next/link";

const ThankYouPagePreview: FC = () => {
  return (
    <ThankYouPage
      content={
        <img
          alt="Ukázka Brandoo"
          className="w-[500px] shadow-xl mb-6 lg:mt-0 mt-5 h-[300px] rounded-lg"
          src="/brandoo-preview.webp"
        />
      }
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
            GRATULUJEME!
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
            Podívejte se na váš Email, máte tam od nás překvapení!
          </p>
          <p className="text-lg lg:text-xl font-semibold mb-3 text-gray-600">
            Podívejte se na váš Email, máte tam od nás překvapení!
          </p>

          <ul className="list-disc mt-6 pl-5 mb-5 text-gray-600">
            <li className="mb-2">Zkontrolujte si svůj E-Mail</li>
            <li>Zkontrolujte si složku spam</li>
          </ul>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300">
            Dokončit
          </button>
        </>
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

export default ThankYouPagePreview;
