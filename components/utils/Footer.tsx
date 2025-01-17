import React from "react";

import { FooterSection } from "@/interfaces/utils";

export interface FooterProps {
  sections: FooterSection[];
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ sections, companyName }) => {
  return (
    <footer className="bg-stone-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul
                className={`${
                  section.orientation === "vertical" ? "flex-col" : "flex gap-3"
                }`}
              >
                {section.sections.map((item, index) => (
                  <li key={index} className="mb-2 flex items-center gap-2">
                    {item.href ? (
                      <a
                        className="hover:underline text-default-200"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.value || item.key}
                      </a>
                    ) : (
                      <button className="text-default-200" onClick={item.fn}>
                        <b>
                          {item.key}
                          {item.key && item.value && ": "}
                        </b>{" "}
                        {item.value}
                      </button>
                    )}
                    {item.href ? (
                      <a
                        className="hover:underline text-default-200"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.icon}
                      </a>
                    ) : (
                      item.icon
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>
            © {new Date().getFullYear()} {companyName}. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
