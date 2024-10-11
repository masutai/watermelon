"use client";

import { GameModel } from "@/lib/game/gameModel";
import { Position } from "@/types/position";
import { useEffect, useRef, useState } from "react";
import GameView from "./GameView";

export default function GameController() {
  const [pressedKey, setPressedKey] = useState<string>("");

  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());

  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key);
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const movePx = 20;
        const rotationStep = 45; // 回転ステップ
        let newPosition: Position = { ...gameModel.characterPosition };

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
            let newGameModel = Object.assign(new GameModel(), gameModel);
            newGameModel.checkCollision(newPosition, gameModel.watermelonPosition);
            setGameModel(newGameModel);
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
        newPosition.x = Math.max(0, Math.min(containerWidth - 20, newPosition.x));
        newPosition.y = Math.max(0, Math.min(containerHeight - 20, newPosition.y));
        let newGameModel = Object.assign(new GameModel(), gameModel);
        newGameModel.updatePosition(newPosition);
        setGameModel(newGameModel);

        // ボールのスタイルを更新
        if (ballRef.current) {
          ballRef.current.style.transform = `rotate(${newPosition.rotation}deg)`;
          ballRef.current.style.left = `${newPosition.x}px`;
          ballRef.current.style.top = `${newPosition.y}px`;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameModel, pressedKey]);
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      {gameModel.isCollision && <p className="mb-4">collision</p>}
      <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
        <GameView
          characterPosition={gameModel.characterPosition}
          watermelonPosition={gameModel.watermelonPosition}
          hitPosition={gameModel.hitPosition}
        />
      </div>
    </div>
  );
}
