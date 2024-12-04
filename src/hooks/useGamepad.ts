import { useEffect, useState } from "react";

export default function useGamepad() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rot, setRot] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const gamepads = navigator.getGamepads();
      const gamepad = Array.from(gamepads).find((gp) => gp !== null);
      if (gamepad) {
        Math.abs(gamepad.axes[0]) >= 0.3 ? setX(gamepad.axes[0]) : setX(0);
        Math.abs(gamepad.axes[1]) >= 0.3 ? setY(gamepad.axes[1]) : setY(0);
        Math.abs(gamepad.axes[2]) >= 0.5 ? setRot(gamepad.axes[2]) : setRot(0);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return { x, y, rot };
}
