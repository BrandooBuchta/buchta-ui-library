import React from "react";

const ClickThroughPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Objevte nejlepší nástroje pro podnikatele!
      </h1>
      <p className="text-lg mb-6">
        Prozkoumejte naši kolekci nástrojů, které vám pomohou růst a rozšiřovat
        podnikání.
      </p>
      <button className="bg-purple-500 text-white py-2 px-4 rounded">
        Zjistěte více
      </button>
    </div>
  );
};

export default ClickThroughPage;
