import { Position } from "@/types/position";

export const calculateHitPosition = (characterPosition: Position): Position => {
  console.log("calculateHitPosition is called");
  const centerX = characterPosition.x + 20; // キャラクターの中心X座標
  const centerY = characterPosition.y + 20; // キャラクターの中心Y座標
  const radius = 20; // 赤い点までの距離
  const angle = ((characterPosition.rotation - 90) * Math.PI) / 180; // 角度をラジアンに変換
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + (radius + 20) * Math.sin(angle),
    rotation: characterPosition.rotation
  };
};
