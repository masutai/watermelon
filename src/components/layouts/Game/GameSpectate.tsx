"use client";

import { GameModel } from "@/lib/game/gameModel";
import { pusherClient } from "@/lib/pusher/client";
import { useEffect, useState } from "react";
import GameView from "./GameView";

export default function GameSpectate({ pairingCode }: { pairingCode: string }) {
  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());
  useEffect(() => {
    const channel = pusherClient
      .subscribe(`private-game:${pairingCode}`)
      .bind("evt::game", (data: GameModel) => {
        console.log("received_from_pusher", data);
        setGameModel(data);
      });
    return () => {
      channel.unbind();
    };
  });
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
