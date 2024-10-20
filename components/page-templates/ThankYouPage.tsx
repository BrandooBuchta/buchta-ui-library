import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ThankyouPage: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/"); // Přesměrování na domovskou stránku nebo jinou stránku
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <span className="min-h-[70px] w-full sm:text-xl text-md flex flex-wrap items-center justify-center gap-1 bg-sky-600 mb-5 py-2 font-semibold text-white">
        Speciální nabídka pro Říjen:{" "}
        <Link
          className="text-yellow-400 font-bold underline"
          href="https://www.brandoo.cz"
          target="_blank"
        >
          Brandoo
        </Link>{" "}
        - WMS jako jedni z prvích při koupi 3 a více služeb{" "}
        <b className="text-yellow-400">ZDARMA</b>!
      </span>
      <div className="container px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mx-7 pt-3">
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
            <button
              className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
              onClick={handleClose}
            >
              Dokončit
            </button>
          </div>
          <img
            alt="Ukázka Brandoo"
            className="w-[500px] shadow-xl mb-6 lg:mt-0 mt-5 h-[300px] rounded-lg"
            src="/brandoo-preview.webp"
          />
        </div>
      </div>
      <div className="py-10">
        <Link href="https://www.brandoo.cz" target="_blank">
          <img
            alt="brandoo-logo"
            className="w-[60px] md:w-[100px] mt-1"
            src="https://www.brandoo.cz/brandoo-logo-light.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
