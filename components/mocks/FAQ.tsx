import React from "react";

import Accordion from "../UI/Accordion";

const FAQ: React.FC = () => {
  const faqItems = [
    {
      title: "What is your return policy?",
      content: "You can return any item within 30 days.",
    },
    {
      title: "How do I track my order?",
      content: "Tracking is available in your account.",
    },
    {
      title: "Can I purchase items offline?",
      content: "Currently, we operate online only.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion items={faqItems} />
    </div>
  );
};

export default FAQ;
