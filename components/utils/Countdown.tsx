import React, { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface CountdownProps {
  title: string;
  subTitle: string;
  targetDate: string; // Datum ve formátu "YYYY-MM-DD"
}

const Countdown: FC<CountdownProps> = ({ title, subTitle, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = dayjs();
      const endDate = dayjs(targetDate);
      const diff = dayjs.duration(endDate.diff(now));

      const formattedTimeLeft = `${diff.days()}d ${diff.hours()}h ${diff.minutes()}m ${diff.seconds()}s`;

      setTimeLeft(formattedTimeLeft);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4">{subTitle}</p>
      <div className="text-4xl font-bold">{timeLeft}</div>
    </div>
  );
};

export default Countdown;
