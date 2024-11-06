"use client";

import useGamepad from "@/hooks/useGamepad";

export default function Pad() {
  const { x, y } = useGamepad();

  return (
    <div>
      <div>X : {x}</div>
      <div>Y :{y}</div>
    </div>
  );
}