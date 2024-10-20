import React from "react";

const SqueezePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Získejte přístup k naší exkluzivní PDF šabloně ZDARMA!
      </h1>
      <p className="text-lg mb-6">
        Tato šablona vám ušetří hodiny práce a pomůže efektivně organizovat váš
        tým.
      </p>
      <form className="space-y-4">
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Vložte svůj e-mail"
          type="email"
        />
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded w-full"
          type="submit"
        >
          Stáhněte nyní
        </button>
      </form>
    </div>
  );
};

export default SqueezePage;
