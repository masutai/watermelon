"use client";
import { Position } from "@/types/position";
import { useEffect, useRef, useState } from "react";

export default function Game() {
  const [position, setPosition] = useState(new Position(0, 0, 0));
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
        const movePx = 20;
        const rotationStep = 45; // 回転ステップ

        let newPosition = position;

        // 回転角度をラジアンに変換
        const rad = (newPosition.rotation * Math.PI) / 180;

        // 移動量の計算
        let deltaX = 0;
        let deltaY = 0;
        let deltaRotation = 0;

        switch (e.key.toLowerCase()) {
          case "q":
            deltaRotation = -rotationStep;
            break;
          case "e":
            deltaRotation = rotationStep;
            break;
          case "w":
            deltaX = movePx * Math.sin(rad);
            deltaY = -movePx * Math.cos(rad);
            break;
          case "s":
            deltaX = -movePx * Math.sin(rad);
            deltaY = movePx * Math.cos(rad);
            break;
          case "a":
            deltaX = -movePx * Math.cos(rad);
            deltaY = -movePx * Math.sin(rad);
            break;
          case "d":
            deltaX = movePx * Math.cos(rad);
            deltaY = movePx * Math.sin(rad);
            break;
          default:
            break;
        }

        // 新しい位置を計算
        if (deltaRotation !== 0) {
          newPosition = newPosition.rotate(deltaRotation);
        }
        if (deltaX !== 0 || deltaY !== 0) {
          newPosition = newPosition.move(deltaX, deltaY);
        }

        // 境界チェック
        const adjustedX = Math.max(0, Math.min(containerWidth - ballWidth, newPosition.x));
        const adjustedY = Math.max(0, Math.min(containerHeight - ballHeight, newPosition.y));
        newPosition = new Position(adjustedX, adjustedY, newPosition.rotation);

        setPosition(newPosition);

        // ボールのスタイルを更新
        if (ballRef.current) {
          ballRef.current.style.transform = `rotate(${newPosition.rotation}deg)`;
          ballRef.current.style.left = `${newPosition.x}px`;
          ballRef.current.style.top = `${newPosition.y}px`;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position]);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
        {/* スクロール可能なコンテンツをここに追加 */}
        <div className="max-h-screen h-screen bg-amber-500 text-black">
          <br />
        </div>
        <div
          className="absolute w-10 h-10 bg-blue-500 rounded-sm transition-all duration-75"
          ref={ballRef}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `rotate(${position.rotation}deg)`
          }}
        />
      </div>
    </div>
  );
}
