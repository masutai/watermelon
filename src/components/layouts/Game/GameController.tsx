"use client";

import { useRouter } from "next/navigation";
import { useGameLogic } from "../../../hooks/useGameLogic";
import GameView from "./GameView";
import { usePusherConnection } from "@/hooks/usePusherConnection";
import { useTimer } from "@/hooks/useTimer";

export default function GameController({ pairingCode }: { pairingCode: string }) {
  const timer = useTimer();
  const { pressedKey, gameModel, setGameModel, containerRef, handleKeyDown } =
    useGameLogic(pairingCode);

  usePusherConnection(gameModel, setGameModel, handleKeyDown, pairingCode);
  const router = useRouter();
  if (timer === "0分0秒") {
    router.push("/gameover");
  }
  if (gameModel.isCollision) {
    router.push("/clear");
  }
  return (
    <div className="h-screen flex flex-col">
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      <p className="text-xl">残り時間：{timer}</p>
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
