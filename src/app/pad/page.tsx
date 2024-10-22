"use client";

import { useEffect, useState } from "react";

export default function Pad() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [aPressed, setAPressed] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const controller = navigator.getGamepads()[0];
      if (controller) {
        setX(controller.axes[0]);
        setY(controller.axes[1]);
        // setAPressed(controller.buttons[0].pressed);
      }
      console.log(navigator.getGamepads());
    }, 100);

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <div>X : {x}</div>
      <div>Y :{y}</div>
      {aPressed && <div>A pressed</div>}
    </div>
  );
}
