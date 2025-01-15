import { useEffect, useState } from "react";

export default function Timer({ onTimeOut, resetTrigger }) {
  const MAX_TIME = 7;
  const [time, setTime] = useState(MAX_TIME);

  useEffect(() => {
    setTime(MAX_TIME);
  }, [resetTrigger]);

  useEffect(() => {
    if (time === 0) {
      onTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return <span>{time}</span>;
}
