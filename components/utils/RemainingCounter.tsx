import React, { FC } from "react";

interface RemainingCounterProps {
  title: string;
  subTitle: string;
  min: number; // Minimální hodnota, např. 0
  max: number; // Maximální hodnota, např. 100 (celkový počet klientů/kusů)
  currentState: number; // Aktuální stav (kolik kusů/klientů zbývá)
}

const RemainingCounter: FC<RemainingCounterProps> = ({
  title,
  subTitle,
  min,
  max,
  currentState,
}) => {
  const percentage = ((currentState - min) / (max - min)) * 100; // Výpočet procent zbývajícího stavu

  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4">{subTitle}</p>

      {/* Progress bar */}
      <div className="w-[1000px] bg-gray-200 rounded-full h-6 mb-4 mx-auto">
        <div
          className="bg-sky-600 h-6 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-lg font-bold">
        {currentState} z {max} zbývá
      </p>
    </div>
  );
};

export default RemainingCounter;
