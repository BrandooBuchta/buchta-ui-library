import React, { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface CountdownTextProps {
  targetDate: string; // Datum ve formátu "YYYY-MM-DD"
}

const CountdownText: FC<CountdownTextProps> = ({ targetDate }) => {
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

  return <span>{timeLeft}</span>;
};

export default CountdownText;
