import { GameModel } from "./gameModel";

export default async function fetchGame(gameModel: GameModel, pairingCode: string) {
  const body = {
    characterPosition: gameModel.characterPosition,
    watermelonPosition: gameModel.watermelonPosition,
    hitPosition: gameModel.hitPosition,
    isCollision: gameModel.isCollision,
    pairingCode: pairingCode
  };

  const data = await fetch("/api/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  const json = await data.json();
  console.log(json.gameModel);
  if (json && typeof json === "object" && "gameModel" in json) {
    return json.gameModel;
  } else {
    console.error("Invalid response from API:", json);
    return null;
  }
}
