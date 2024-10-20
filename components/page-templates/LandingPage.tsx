import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Získejte naši novou knihu a zdvojnásobte své prodeje za 30 dní!
      </h1>
      <p className="text-lg mb-6">
        Přečtěte si náš osvědčený průvodce a naučte se osvědčené strategie, jak
        zvýšit prodeje a přitáhnout více zákazníků.
      </p>
      <form className="space-y-4">
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Vložte svůj e-mail"
          type="email"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          type="submit"
        >
          Stáhněte si zdarma
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
