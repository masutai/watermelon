"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import GameView from "./GameView";
import { usePusherConnection } from "@/hooks/usePusherConnection";
import { useTimer } from "@/hooks/useTimer";
import { GameModel } from "@/lib/game/gameModel";

export default function GameSpectate({ pairingCode }: { pairingCode: string }) {
  const timer = useTimer();
  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());
  usePusherConnection(gameModel, setGameModel, () => {}, pairingCode);
  const router = useRouter();
  if (timer === "0分0秒") {
    router.push("/gameover");
  }
  if (gameModel.isCollision) {
    router.push("/clear");
  }
  return (
    <div>
      <p className="text-xl">残り時間：{timer}</p>
      <GameView
        characterPosition={gameModel.characterPosition}
        watermelonPosition={gameModel.watermelonPosition}
        hitPosition={gameModel.hitPosition}
      />
    </div>
  );
}
