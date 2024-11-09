import { useEffect, useState } from "react";

export default function useGamepad() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let gamepad: Gamepad | null = null;
      // if (navigator.getGamepads()[0]) {
      //   gamepad = navigator.getGamepads()[0];
      // } else if (navigator.getGamepads()[1]) {

      // }
      gamepad = navigator.getGamepads()[1];
      if (gamepad) {
        setX(gamepad.axes[0]);
        setY(gamepad.axes[1]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return { x, y };
}
