import React from "react";

interface WarningBarProps {
  bgColor?: string;
  content: JSX.Element | JSX.Element[] | string;
}

const WarningBar: React.FC<WarningBarProps> = ({ bgColor, content }) => {
  return (
    <span
      className={`min-h-[70px] w-full sm:text-xl text-md flex flex-wrap items-center justify-center gap-1 ${bgColor ? bgColor : "bg-sky-600"} mb-3 py-2 font-semibold text-white`}
    >
      {content}
    </span>
  );
};

export default WarningBar;
