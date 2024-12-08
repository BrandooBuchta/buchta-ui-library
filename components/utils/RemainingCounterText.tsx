import React, { FC } from "react";

interface RemainingCounterTextProps {
  min: number;
  max: number;
  currentState: number;
}

const RemainingCounterText: FC<RemainingCounterTextProps> = ({
  min,
  max,
  currentState,
}) => {
  const percentage = ((currentState - min) / (max - min)) * 100;

  return (
    <span>
      {currentState}/{max} ({percentage.toFixed(0)}%)
    </span>
  );
};

export default RemainingCounterText;
