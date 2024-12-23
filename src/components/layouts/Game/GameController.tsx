"use client";

import { useRouter } from "next/navigation";
import { useGameLogic } from "../../../hooks/useGameLogic";
import GameView from "./GameView";
import { usePusherConnection } from "@/hooks/usePusherConnection";

export default function GameController({ pairingCode }: { pairingCode: string }) {
  const { pressedKey, gameModel, setGameModel, containerRef, handleKeyDown, isGameOver } =
    useGameLogic(pairingCode);

  usePusherConnection(gameModel, setGameModel, handleKeyDown, pairingCode);
  const router = useRouter();
  if (gameModel.isCollision) {
    router.push("/clear");
  }
  return (
    <div className="h-screen flex flex-col">
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      {isGameOver ? <p>collision</p> : <></>}
      {gameModel.isCollision ? (
        <p>クリア！</p>
      ) : (
        <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
          <div className="hidden">
            <GameView
              characterPosition={gameModel.characterPosition}
              watermelonPosition={gameModel.watermelonPosition}
              hitPosition={gameModel.hitPosition}
            />
          </div>
        </div>
      )}
    </div>
  );
}
