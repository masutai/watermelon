"use client";

import { usePusherConnection } from "@/hooks/usePusherConnection";
import { useGameLogic } from "../../../hooks/useGameLogic";
import GameView from "./GameView";

export default function GameController({ pairingCode }: { pairingCode: string }) {
  const {
    pressedKey,
    gameModel,
    setGameModel,
    containerRef,
    ballRef,
    handleKeyDown,
    handlePadDown
  } = useGameLogic(pairingCode);

  usePusherConnection(gameModel, setGameModel, handleKeyDown, handlePadDown, pairingCode);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      {gameModel.isCollision && <p className="mb-4">collision</p>}
      <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
        <div className="hidden">
          <GameView
            characterPosition={gameModel.characterPosition}
            watermelonPosition={gameModel.watermelonPosition}
            hitPosition={gameModel.hitPosition}
          />
        </div>
      </div>
    </div>
  );
}
