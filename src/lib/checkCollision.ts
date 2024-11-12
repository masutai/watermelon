"use server";
import { Position } from "@/types/position";

/**
 * 衝突判定
 * @param hitPosition 割る位置
 * @param watermelon ウォータメロンの位置
 * @returns 衝突しているかどうか
 */
export const checkCollision = (hitPosition: Position, watermelon: Position): boolean => {
  const distance = Math.sqrt(
    (hitPosition.x - watermelon.x) ** 2 + (hitPosition.y - watermelon.y) ** 2
  );
  return distance < 20;
};
