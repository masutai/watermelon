"use client";
import { useEffect, useRef, useState } from "react";
import { calculateHitPosition } from "@/lib/calculateHitPosition";
import { checkCollision } from "@/lib/checkCollision";
import { Position } from "@/types/position";

export default function Game() {
  const [characterPosition, setCharacterPosition] = useState<Position>({
    x: 80,
    y: 100,
    rotation: 0
  });
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [isCollision, setIsCollision] = useState(false);
  const [hitPosition, setHitPosition] = useState<Position>({
    x: 0,
    y: 0,
    rotation: 0
  });

  const containerWidth = containerRef.current?.clientWidth || 0;
  const watermelonPosition: Position = { x: containerWidth / 2, y: 0, rotation: 0 };

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
        const newPosition: Position = { ...characterPosition };

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
          case " ":
            setIsCollision(checkCollision(hitPosition, watermelonPosition));
            break;
          default:
            break;
        }

        // 新しい位置を計算
        if (deltaRotation !== 0) {
          newPosition.rotation = (newPosition.rotation + deltaRotation) % 360;
        }
        if (deltaX !== 0 || deltaY !== 0) {
          newPosition.x += deltaX;
          newPosition.y += deltaY;
        }

        // 境界チェック
        newPosition.x = Math.max(0, Math.min(containerWidth - ballWidth, newPosition.x));
        newPosition.y = Math.max(0, Math.min(containerHeight - ballHeight, newPosition.y));
        // console.log(newPosition)
        setCharacterPosition(newPosition);

        setHitPosition(calculateHitPosition(newPosition));

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
  }, [characterPosition, watermelonPosition]);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      {isCollision && <p className="mb-4">collision</p>}
      <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
        {/* スクロール可能なコンテンツをここに追加 */}
        <div className="max-h-screen h-screen bg-amber-500 text-black">
          <div
            className="absolute w-10 h-10 bg-green-800 rounded-full"
            style={{
              left: `${watermelonPosition.x}px`,
              top: `${watermelonPosition.y}px`,
              transform: `rotate(${watermelonPosition.rotation}deg)`
            }}
          ></div>
        </div>
        <div
          className="absolute w-10 h-10 bg-blue-500 rounded-sm transition-all duration-75"
          ref={ballRef}
          style={{
            left: `${characterPosition.x}px`,
            top: `${characterPosition.y}px`,
            transform: `rotate(${characterPosition.rotation}deg)`
          }}
        >
          <div className="relative top-[-20px] left-5 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div
          className="absolute w-1 h-1 bg-teal-100 rounded-full transition-all duration-75"
          style={{
            top: `${hitPosition.y}px`,
            left: `${hitPosition.x}px`
          }}
        />
        <div
          className="absolute w-1 h-1 bg-teal-500 rounded-full transition-all duration-75"
          style={{
            left: `${watermelonPosition.x + 20}px`,
            top: `${watermelonPosition.y + 20}px`
          }}
        />
      </div>
    </div>
  );
}
