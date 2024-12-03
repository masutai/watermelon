"use client";
import { useEffect, useState } from "react";
import { GameModel } from "@/lib/game/gameModel";

export function usePad(initialGameModel: GameModel) {
  const [gameModel, setGameModel] = useState(initialGameModel);

  useEffect(() => {
    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      const gamepad = Array.from(gamepads).find((gp) => gp !== null);

      if (gamepad) {
        const deltaX = gamepad.axes[0] * 23;
        const deltaY = gamepad.axes[1] * 23;
        const deltaRotation = gamepad.axes[2] * 90;
        setGameModel((prevModel) => {
          const newPosition = {
            x: prevModel.characterPosition.x + deltaX,
            y: prevModel.characterPosition.y + deltaY,
            rotation: prevModel.characterPosition.rotation + deltaRotation
          };

          const updateGameModel = new GameModel();
          Object.assign(updateGameModel, prevModel);
          updateGameModel.characterPosition = newPosition;
          return updateGameModel;
        });
      }
    };

    const interval = setInterval(handleGamepadInput, 200);
    return () => clearInterval(interval);
  }, []); // 依存配列を空にする

  return { gameModel };
}
