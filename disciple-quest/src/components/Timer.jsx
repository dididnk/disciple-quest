import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
  const MAX = 30;
  const [timer, setTimer] = useState(MAX);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(MAX);
  }, [questionNumber]);
  return timer;
}
