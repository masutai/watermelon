import { useEffect, useState } from "react";

export function useTimer() {
  const gameTimer = 120;
  const [timer, setTimer] = useState(gameTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedTime = `${minutes}分${seconds}秒`;

  return formattedTime;
}
