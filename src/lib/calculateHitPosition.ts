import { Position } from "@/types/position";

/**
 * 衝突位置を計算
 * @param characterPosition キャラクターの位置
 * @returns 衝突位置
 */
export const calculateHitPosition = (characterPosition: Position): Position => {
  const centerX = characterPosition.x + 20; // キャラクターの中心X座標
  const centerY = characterPosition.y + 20; // キャラクターの中心Y座標
  const radius = 40; // 赤い点までの距離
  const angle = (characterPosition.rotation * Math.PI) / 180; // 角度をラジアンに変換
  return {
    x: Math.round(centerX + radius * Math.sin(angle)),
    y: Math.round(centerY - radius * Math.cos(angle)),
    rotation: characterPosition.rotation
  };
};
