import React, { FC } from "react";

interface RemainingCounterProps {
  title: JSX.Element | JSX.Element[] | string;
  subTitle: JSX.Element | JSX.Element[] | string;
  bgColor?: string;
  min: number;
  max: number;
  currentState: number;
}

const RemainingCounter: FC<RemainingCounterProps> = ({
  title,
  subTitle,
  min,
  max,
  currentState,
  bgColor,
}) => {
  const percentage = ((currentState - min) / (max - min)) * 100;

  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4">{subTitle}</p>
      <div className="w-[90%] bg-gray-200 rounded-full h-6 mb-4 mx-auto">
        <div
          className={`${bgColor || "bg-pink-500"} h-6 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-lg font-bold">
        {currentState}/{max}
      </p>
    </div>
  );
};

export default RemainingCounter;
