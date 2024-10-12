"use client";

import { GameModel } from "@/lib/game/gameModel";
import { pusherClient } from "@/lib/pusher/client";
import { Position } from "@/types/position";
import { useCallback, useEffect, useRef, useState } from "react";
import GameView from "./GameView";

export default function GameController() {
  const [pressedKey, setPressedKey] = useState<string>("");
  const [gameModel, setGameModel] = useState<GameModel>(new GameModel());
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      setPressedKey(e.key);
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const movePx = 20;
        const rotationStep = 45;
        let newPosition: Position = { ...gameModel.characterPosition };

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
            let newGameModel = Object.assign(new GameModel(), gameModel);
            newGameModel.checkCollision(newPosition, gameModel.watermelonPosition);
            setGameModel(newGameModel);
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
        updatedGameModel.updatePosition(newPosition);

        const body = {
          characterPosition: updatedGameModel.characterPosition,
          watermelonPosition: updatedGameModel.watermelonPosition,
          hitPosition: updatedGameModel.hitPosition,
          isCollision: updatedGameModel.isCollision
        };
        let data = await fetch("/api/game", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        let json = await data.json();
        if (json && typeof json === "object" && "gameModel" in json) {
          console.log("handle_test_click_response", json);
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
    [gameModel, containerRef, ballRef]
  );

  useEffect(() => {
    const channel = pusherClient.subscribe("private-game");

    channel.bind("evt::game", (data: GameModel) => {
      console.log("received_from_pusher", data);
      setGameModel(data);
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      channel.unbind();
      pusherClient.unsubscribe("private-game");
    };
  }, [setGameModel, handleKeyDown]);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <p className="mb-4">最後に押されたキー: {pressedKey || "なし"}</p>
      {gameModel.isCollision && <p className="mb-4">collision</p>}
      <div ref={containerRef} className="relative overflow-hidden border border-teal-300 h-full">
        <GameView
          characterPosition={gameModel.characterPosition}
          watermelonPosition={gameModel.watermelonPosition}
          hitPosition={gameModel.hitPosition}
        />
      </div>
    </div>
  );
}
