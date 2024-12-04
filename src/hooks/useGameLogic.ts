import { useCallback, useRef, useState } from "react";
import { GameModel } from "@/lib/game/gameModel";
import { Position } from "@/types/position";

export function useGameLogic(pairingCode: string) {
  const [pressedKey, setPressedKey] = useState<string>("");
  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [attackCount, setAttackCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      setPressedKey(e.key);
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const movePx = 20;
        const rotationStep = 45;
        const newPosition: Position = { ...gameModel.characterPosition };

        const rad = (newPosition.rotation * Math.PI) / 180;

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
            setAttackCount(attackCount + 1);
            if (attackCount < 100) {
              const newGameModel = Object.assign(new GameModel(), gameModel);
              newGameModel.checkCollision(
                newGameModel.hitPosition,
                newGameModel.watermelonPosition
              );
              setGameModel(newGameModel);
            } else {
              setIsGameOver(true);
            }
            break;
          default:
            break;
        }

        if (deltaRotation !== 0) {
          newPosition.rotation = (newPosition.rotation + deltaRotation) % 360;
        }
        if (deltaX !== 0 || deltaY !== 0) {
          newPosition.x += deltaX;
          newPosition.y += deltaY;
        }

        newPosition.x = Math.max(0, Math.min(containerWidth - 20, newPosition.x));
        newPosition.y = Math.max(0, Math.min(containerHeight - 20, newPosition.y));

        const updatedGameModel = Object.assign(new GameModel());
        Object.assign(updatedGameModel, gameModel);
        updatedGameModel.updateCharacterPosition(newPosition);

        const body = {
          characterPosition: updatedGameModel.characterPosition,
          watermelonPosition: updatedGameModel.watermelonPosition,
          hitPosition: updatedGameModel.hitPosition,
          isCollision: updatedGameModel.isCollision,
          pairingCode: pairingCode,
          attackCount: attackCount
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

        if (ballRef.current) {
          ballRef.current.style.transform = `rotate(${newPosition.rotation}deg)`;
          ballRef.current.style.left = `${newPosition.x}px`;
          ballRef.current.style.top = `${newPosition.y}px`;
        }
      }
    },
    [gameModel, containerRef, ballRef, pairingCode]
  );
    const data = await fetch("/api/game", {
      
  return {
    pressedKey,
    gameModel,
    setGameModel,
    containerRef,
    ballRef,
    handleKeyDown
  };
}
