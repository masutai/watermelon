import { calculateHitPosition } from "@/lib/calculateHitPosition";
import { Position } from "@/types/position";

export class GameModel {
  characterPosition: Position;
  watermelonPosition: Position;
  hitPosition: Position;
  isCollision: boolean;

  constructor() {
    this.characterPosition = {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 500),
      rotation: Math.floor(Math.random() * 360)
    };
    this.watermelonPosition = { x: 700, y: 20, rotation: 0 };
    this.hitPosition = calculateHitPosition(this.characterPosition);
    this.isCollision = false;
  }

  updateCharacterPosition(newPosition: Position): void {
    this.characterPosition = newPosition;
    this.hitPosition = calculateHitPosition(this.characterPosition);
  }

  updateWatermelonPosition(newPosition: Position): void {
    this.watermelonPosition = newPosition;
  }

  checkCollision(hitPosition: Position, watermelon: Position) {
    const distance = Math.sqrt(
      (hitPosition.x - watermelon.x - 20) ** 2 + (hitPosition.y - watermelon.y - 20) ** 2
    );
    this.isCollision = distance < 25;
  }
}
