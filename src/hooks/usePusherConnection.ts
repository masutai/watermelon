import { GameModel } from "@/lib/game/gameModel";
import { pusherClient } from "@/lib/pusher/client";
import { useEffect } from "react";

export function usePusherConnection(
  gameModel: GameModel,
  setGameModel: React.Dispatch<React.SetStateAction<GameModel>>,
  handleKeyDown: (e: KeyboardEvent) => void,
  pairingCode: string
) {
  useEffect(() => {
    const channel = pusherClient.subscribe(`private-game-${pairingCode}`);

    channel.bind("evt::game", (data: GameModel) => {
      setGameModel(data);
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      channel.unbind();
      pusherClient.unsubscribe(`private-game-${pairingCode}`);
    };
  }, [setGameModel, handleKeyDown]);
}
