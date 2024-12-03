import { FC } from "react";
import React from "react";
import Link from "next/link";

import SalesPage from "@/components/page-templates/SalesPage";
import { Button, Card, Countdown, RemainingCounter } from "@/components";
import WarningBar from "@/components/utils/WarningBar";
import ReferenceCard from "@/components/utils/ReferenceCard";
import SmallProfile from "@/components/utils/SmallProfile";
import Footer from "@/components/utils/Footer";
import { FooterSection } from "@/interfaces/utils";
import TextInput from "@/components/UI/TextInput";
import ExitPopup from "@/components/utils/ExitPopUp";

const ExampleForm = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      color="#0070f3"
      error={false}
      inputSize="md"
      label="Jméno"
      placeholder="Jan Novák"
      variant="filled"
    />
    <TextInput
      color="#0070f3"
      error={false}
      inputSize="md"
      label="Email"
      placeholder="jan@novak.cz"
      variant="filled"
    />
    <TextInput
      color="#0070f3"
      error={false}
      inputSize="md"
      label="Telefon"
      placeholder="+420 123 456 789"
      variant="filled"
    />
    <div className="flex flex-col gap-3 mt-5">
      <Button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
        Chci vydělávat více peněz!
      </Button>
      <Button
        className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
        variant="text"
      >
        Nechci vydělávat více peněz...
      </Button>
    </div>
  </div>
);

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

const SalesPagePreview: FC = () => {
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
      <ExitPopup
        form={<ExampleForm />}
        image="/profile-mock.png"
        subTitle="Mohlo by vás to stát tisíce! Nechte nám své údaje a ZDARMA vám pošleme 3 tipy, které vám mohou pomoci vydělat více peněz."
        title="Chystáte se odejít?"
      />
      <SalesPage
        actionButtons={
          <Button className="m-5" size="xl">
            Action Button!
          </Button>
        }
        callToAction={
          <div className="mx-auto text-lg text-center max-w-[1000px]">
            Posuňte svůj byznys na novou úroveň s námi! Vyplňte krátký formulář
            a získejte cenovou nabídku na míru ZDARMA. Ukážeme vám, co může
            skutečně nastartovat váš růst. Stačí kliknout níže a my se o zbytek
            postaráme!
          </div>
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
        fomo={
          <RemainingCounter
            currentState={5}
            max={10}
            min={0}
            subTitle="Rada a vypracování toho co vám bude fungovat není bezcená - proto tato nabídka platí pouze pro prvních 10 lidí! ⏳"
            title="Cenová nabídka ZDARMA"
          />
        }
        footer={<Footer companyName="TvojeFirma" sections={footerSections} />}
        guarantee={
          <Card className="py-3 px-5">
            <SmallProfile
              avatar={
                <i className="mdi mdi-check-decagram text-sky-600 text-5xl" />
              }
              fallback="X"
              subtitle="Všechno co nám dáte se vám vrátí, a to několikanásobně!"
              title="GARANTUJEME!"
            />
          </Card>
        }
        header={<div className="text-center">LOGO</div>}
        landingButtons={
          <Button className="m-5" size="xl">
            Chci vaše služby!
          </Button>
        }
        promise={
          <>
            <h2 className="font-bold text-5xl">Můžeme vám slíbit...</h2>
            <p className="text-lg text-center max-w-[1000px]">
              Pokud nám věnujete ještě pár minut a sjednáte si s námi
              konzultaci, připravíme pro vás zcela ZDARMA cenovou nabídku na
              míru. Ukážeme vám, co přesně může posunout váš byznys kupředu. A
              jestli to necháte na nás? To už bude jen na vás!
            </p>
          </>
        }
        referenceButtons={
          <Button className="m-5" size="xl">
            Chci vaše služby!
          </Button>
        }
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
        story={<Story />}
        storyButtons={
          <Button className="m-5" size="xl">
            Story Button!
          </Button>
        }
        subTitle={
          <p className="text-center">
            Věříme že rozdíl mezi firmami co na trhu vyhrají a těmi co prohrají,
            je ten že vítězové se soustředí na to v čem jsou nejlepší a práci ve
            které nejsou nejlepší nechají někomu jinému. Svěřením své prezentace
            profesionálům si uvolníte ruce pro růst a klíčová rozhodnutí.
          </p>
        }
        title={
          <h1 className="text-4xl font-bold mb-4 text-center mt-5">
            Naše služby jsou legální steroidy pro Váš business.
          </h1>
        }
        videoButtons={
          <Button className="m-5" size="xl">
            Video Button!
          </Button>
        }
        warningBar={
          <WarningBar
            content={
              <>
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
              </>
            }
          />
        }
      />
    </>
  );
};

export default SalesPagePreview;
