import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";

interface AccordionProps {
  items: {
    title: JSX.Element | JSX.Element[] | string;
    content: JSX.Element | JSX.Element[] | string;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden transition-all shadow-lg">
          <div>
            <button
              className="w-full flex justify-between items-center text-left font-semibold"
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="ml-2"
                initial={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <i className="mdi mdi-chevron-down" />
              </motion.span>
            </button>
            {/* Obsah */}
            <motion.div
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="mt-3">{item.content}</p>
            </motion.div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Accordion;
