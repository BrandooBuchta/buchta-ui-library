import React from "react";

const LeadCapturePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Připojte se k 10 000+ odběratelům!
      </h1>
      <p className="text-lg mb-6">
        Zadejte svůj e-mail a každý týden obdržíte praktické tipy, triky a
        exkluzivní nabídky.
      </p>
      <form className="space-y-4">
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Vložte svůj e-mail"
          type="email"
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded w-full"
          type="submit"
        >
          Získejte přístup
        </button>
      </form>
    </div>
  );
};

export default LeadCapturePage;
