"use client";

import { useState } from "react";
import GameView from "./GameView";
import { usePusherConnection } from "@/hooks/usePusherConnection";
import { GameModel } from "@/lib/game/gameModel";

export default function GameSpectate({ pairingCode }: { pairingCode: string }) {
  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());
  usePusherConnection(gameModel, setGameModel, () => {}, pairingCode);
  return (
    <div>
      <GameView
        characterPosition={gameModel.characterPosition}
        watermelonPosition={gameModel.watermelonPosition}
        hitPosition={gameModel.hitPosition}
      />
    </div>
  );
}
