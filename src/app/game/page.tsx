'use client';

import { useEffect, useRef, useState } from "react";


export default function Game() {

  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key);

      if (containerRef.current) {
        switch (e.key) {
          case "w":
            containerRef.current.scrollBy(0, -100);
            break;
          case "s":
            containerRef.current.scrollBy(0, 100);
            break;
          case "a":
            containerRef.current.scrollBy(-100, 0);
            break;
          case "d":
            containerRef.current.scrollBy(100, 0);
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || 'なし'}</p>
      <div 
        ref={containerRef} 
        className="w-64 h-64 overflow-auto border border-teal-300 p-4"
      >
        {/* スクロール可能なコンテンツをここに追加 */}
        <div className="h-screen w-screen bg-gray-100 text-black">
          スクロール可能なコンテンツ
          <br />
          W, A, S, D で移動
        </div>
      </div>
    </div>
  );
}