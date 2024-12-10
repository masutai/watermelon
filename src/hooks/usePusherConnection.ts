import { useEffect } from "react";
import useGamepad from "./useGamepad";
import { GameModel } from "@/lib/game/gameModel";
import { pusherClient } from "@/lib/pusher/client";

export function usePusherConnection(
  initialGameModel: GameModel,
  setGameModel: React.Dispatch<React.SetStateAction<GameModel>>,
  handleKeyDown: (e: KeyboardEvent) => void,
  pairingCode: string
) {
  const { x, y, rot } = useGamepad();
  useEffect(() => {
    const channel = pusherClient.subscribe(`private-game-${pairingCode}`);

    channel.bind("evt::game", (data: GameModel) => {
      setGameModel(data);
    });

    window.addEventListener("keydown", handleKeyDown);

    const handleGamepadInput = async () => {
      const deltaRot = rot * 90;
      // const rotation = initialGameModel.characterPosition.rotation + deltaRot;
      // const rad = (rotation * Math.PI) / 180;
      const deltaX = x * 20;
      const deltaY = y * 20;
      const newPosition = {
        x: initialGameModel.characterPosition.x + deltaX,
        y: initialGameModel.characterPosition.y + deltaY,
        rotation: initialGameModel.characterPosition.rotation + deltaRot
      };

      const updatedGameModel = new GameModel();
      Object.assign(updatedGameModel, initialGameModel);
      updatedGameModel.characterPosition = newPosition;
      setGameModel(updatedGameModel);

      const body = {
        characterPosition: updatedGameModel.characterPosition,
        watermelonPosition: updatedGameModel.watermelonPosition,
        hitPosition: updatedGameModel.hitPosition,
        isCollision: updatedGameModel.isCollision,
        pairingCode: pairingCode,
        attackCount: 0
      };
      const data = await fetch("/api/game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const json = await data.json();
      if (json && typeof json === "object" && "gameModel" in json) {
        setGameModel(json.gameModel);
      } else {
        console.error("Invalid response from API:", json);
      }
    };

    // ゲームパッドの入力を定期的にチェック
    const gamepadInterval = setInterval(handleGamepadInput, 200);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(gamepadInterval);
      channel.unbind();
      pusherClient.unsubscribe(`private-game-${pairingCode}`);
    };
  }, [setGameModel, handleKeyDown, x, y, rot, initialGameModel, pairingCode]);
}
