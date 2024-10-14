"use server";
import { Position } from "@/types/position";

export const checkCollision = (player: Position, watermelon: Position): boolean => {
  const distance = Math.sqrt((player.x - watermelon.x) ** 2 + (player.y - watermelon.y) ** 2);
  return distance < 20;
};
