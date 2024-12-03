import { FC } from "react";
import React from "react";

import LeadCapturePage from "@/components/page-templates/LeadCapturePage";
import { Button } from "@/components";
import WarningBar from "@/components/utils/WarningBar";
import ReferenceCard from "@/components/utils/ReferenceCard";
import Footer from "@/components/utils/Footer";
import { FooterSection } from "@/interfaces/utils";
import CountdownText from "@/components/utils/CountdownText";

const Story: FC = () => {
  return (
    <div className="px-16">
      <h2 className="text-center text-4xl font-bold mb-6">
        97% Podnikatelů dělá tu stejnou chybu... Jste jedním z nich?
      </h2>
      <p className="text-xl text-center mb-6">
        Jsme Brandoo Enterprises - roky děláme Marketing a Webové stránky, díky
        čemu jsme získali X zkušeností a kontaktů na to abychom vám pomohli
        téměř se vším co je pro vaší propagaci a prezentaci důležité.
      </p>

      <div className="flex justify-center mb-6">
        <img alt="graf" className="w-[800px] py-10" src="/chart-mock.png" />
      </div>
      <p className="text-xl text-center mb-6">
        Jak dlouho už bojujete, abyste udrželi svou firmu nad vodou? Cítíte, že
        dáváte veškerý svůj čas, energii a peníze, ale výsledky nepřichází? Není
        to vaše chyba – spousta podnikatelů si myslí, že všechno zvládnou sami,
        a často přitom ignorují to, co může jejich byznys skutečně posunout
        kupředu: delegovat na ostatní lidi ty nejdůležitější věci.
      </p>

      <p className="text-xl text-center text-red-600 font-semibold mb-6">
        Pravda je taková, že čím déle čekáte, tím více riskujete. Každý den, kdy
        odkládáte důležité kroky, vás posouvá blíže k neúspěchu.
      </p>
      <p className="text-xl text-center mb-6">
        Ale nemusí to tak být. Představte si, že byste měli partnera, který by
        vám pomohl s tím, co vás brzdí. Někdo, kdo se postará o váš marketing,
        webové stránky, grafiku nebo třeba videoprodukci, zatímco vy se můžete
        plně soustředit na to, v čem jste nejlepší – na vedení svého byznysu
        kterému rozumíte nejlépe.
      </p>
      {/* <div className="flex justify-center mb-6">
        <img
          alt="Fotka nás dvou TODO :P"
          className="rounded-lg shadow-lg w-1/2"
          src="https://via.placeholder.com/600x300"
        />
      </div> */}
      <p className="text-xl text-center text-green-600 font-semibold mt-6">
        Máte před sebou jasnou cestu. Svěřte se do rukou odborníků a společně
        dokážeme proměnit vaši vizi v realitu. Naděje existuje – stačí udělat
        první krok.
      </p>
    </div>
  );
};

const LeadCapturePagePreview: FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Marekting",
      sections: [
        {
          key: "Jakub Podešva",
          icon: <i className="mdi mdi-check-decagram" />,
        },
        { key: "IČ", value: "12345678" },
        { key: "Telefon", value: "+420 605 240 538" },
        { key: "Email", value: "kubiss@brandoo.cz" },
      ],
      orientation: "vertical",
    },
    {
      title: "Production",
      sections: [
        {
          key: "Šimom Buchta",
          icon: <i className="mdi mdi-check-decagram" />,
        },
        { key: "IČ", value: "12345678" },
        { key: "Telefon", value: "+420 739 998 391" },
        { key: "Email", value: "buchta@brandoo.cz" },
      ],
      orientation: "vertical",
    },
    {
      title: "Odkazy",
      sections: [
        { key: "Brandoo WMS", href: "https://www.brandoo.cz" },
        // { key: "Brandoo Academy", href: "https://academy.brandoo.cz" },
        // { key: "Brandoo Academy", href: "https://academy.brandoo.cz" },
      ],
      orientation: "vertical",
    },
    {
      title: "Sociální sítě",
      sections: [
        {
          icon: <i className="mdi mdi-facebook text-2xl text-default-200" />,
          href: "https://facebook.com",
        },
        {
          icon: <i className="mdi mdi-instagram text-2xl text-default-200" />,
          href: "https://instagram.com",
        },
      ],
    },
  ];

  return (
    <>
      <LeadCapturePage
        shouldBeHeaderInContainer
        actionButtons={
          <Button className="m-5" size="xl">
            Action Button!
          </Button>
        }
        callToAction={
          <div className="mx-auto text-lg text-center max-w-[1000px]">
            Chcete být u toho jako první? Zadejte svůj e-mail a my vám dáme
            Brandoo na 1 měsíc ZDARMA na vyzkoušení!
          </div>
        }
        callToActionPreTitle={<h4 className="text-lg">Měsíc zdarma</h4>}
        callToActionTitle={
          <p className="text-2xl font-bold">
            Brandoo je revoluce v Online Marketingu!
          </p>
        }
        content={
          <div className="w-[800px] h-[500px] shadow-xl rounded-lg">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-[800px] h-[500px] shadow-xl rounded-lg"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/y0sF5xhGreA?si=kH_rokeMXjehqPAS"
              title="YouTube video player"
            />
          </div>
        }
        flow="col"
        footer={<Footer companyName="TvojeFirma" sections={footerSections} />}
        header={<div className="text-center">LOGO</div>}
        references={[1, 2, 3, 4, 5].map((e) => (
          <ReferenceCard
            key={e}
            reference={{
              author: `Author ${e}`,
              company: `Company ${e}`,
              avatar: "/profile-mock.png",
              href: "/",
              icon: "mdi-check-decagram",
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae placeat, dicta quaerat, accusantium libero architecto minus quia amet obcaecati harum soluta voluptates, repellat quae. Eveniet sint tempore perspiciatis. Sequi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, hic quibusdam ut modi dolore, mollitia eos et totam nostrum ab ipsum? Eligendi animi aspernatur magnam laudantium, pariatur illum! Molestias, autem.",
            }}
          />
        ))}
        subTitle={
          <p className="text-3xl lg:text-5xl font-black mb-2 text-center flex-1 mt-3 uppercase">
            Kdo bude mít{" "}
            <a
              className="text-pink-500 underline"
              href="https://www.brandoo.cz"
              rel="noreferrer"
              target="_blank"
            >
              Brandoo
            </a>{" "}
            - Váš osobní stroj na peníze! Ušetří vám desítky hodin a vydělá
            tisíce.
          </p>
        }
        title={
          <h2 className="text-4xl text-center my-3 font-semibold">
            Můžete být první
          </h2>
        }
        warningBar={
          <WarningBar
            content={
              <>
                <b className="text-yellow-400 font-bold">POZOR!</b> Nabídka
                platí pouze do:
                <b className="text-yellow-400 font-bold">
                  <CountdownText targetDate="2024-10-30" />
                </b>
              </>
            }
          />
        }
      />
    </>
  );
};

export default LeadCapturePagePreview;
