import { useState, useEffect, FC } from "react";
import Link from "next/link";
import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

interface CookiesBarProps {
  title?: string;
  content?: string;
}

const CookiesBar: FC<CookiesBarProps> = ({ title, content }) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookiesConsent");

    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem("cookiesConsent", consent ? "true" : "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Card className="fixed bottom-0 left-0 w-full md:left-[50%] md:translate-x-[-50%] mb-10 max-w-full md:max-w-[1000px] mx-auto bg-white text-white p-5 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center z-50">
      <div className="w-full">
        <p className="font-bold text-default-800 text-lg md:text-2xl">
          <i className="mdi mdi-cookie mr-1" />
          {title ||
            "Tento web používá cookies, souhlasíte s používáním cookies?"}
        </p>
        <button
          className={`text-sm text-blue-500 ${!showDetails && "mb-3 md:mb-5"}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Skrýt podrobnosti" : "Zobrazit podrobnosti"}
        </button>
        {showDetails && (
          <p className="mt-2 text-default-600 mb-3 md:mb-5">
            {content || (
              <>
                Tento web používá cookies pro sledování konverzního poměru a
                zlepšování služeb. Používáme analytický nástroj{" "}
                <Link href="https://www.brandoo.cz" target="_blank">
                  <b>Brandoo</b>
                </Link>
                , který nám pomáhá měřit, zda jste na našem webu poprvé, a díky
                tomu optimalizujeme naši nabídku. Cookies nám také pomáhají lépe
                porozumět návštěvnosti a analyzovat interakce na webu.
              </>
            )}
          </p>
        )}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex gap-2 mb-3 md:mb-0">
            <Button
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              onClick={() => handleConsent(true)}
            >
              Přijmout
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              color="red"
              variant="tonal"
              onClick={() => handleConsent(false)}
            >
              Odmítnout
            </Button>
          </div>
          <div className="flex items-center">
            <p className="text-default-500 mr-2">Powered by</p>
            <Link href="https://www.brandoo.cz" target="_blank">
              <img
                alt="brandoo-logo"
                className="w-[60px] md:w-[80px] mt-1"
                src="https://www.brandoo.cz/brandoo-logo-light.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CookiesBar;
