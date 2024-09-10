"use client";

import { useEffect, useRef, useState } from "react";

export default function Game() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key);

      if (containerRef.current && ballRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const ballWidth = ballRef.current.clientWidth;
        const ballHeight = ballRef.current.clientHeight;
        let x = position.x;
        let y = position.y;
        const movePx = 20;

        switch (e.key) {
          case "w":
            y = Math.max(0, y - movePx);
            break;
          case "s":
            y = Math.min(containerHeight - ballHeight, y + movePx);
            break;
          case "a":
            x = Math.max(0, x - movePx);
            break;
          case "d":
            x = Math.min(containerWidth - ballWidth, x + movePx);
            break;
        }
        setPosition({ x, y });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden border border-teal-300 p-4"
      >
        <div
          className="absolute w-10 h-10 bg-blue-500 rounded-full"
          ref={ballRef}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transition: "all 0.3s"
          }}
        />
      </div>
    </div>
  );
}
