import { calculateHitPosition } from "@/lib/calculateHitPosition";
import { Position } from "@/types/position";

export class GameModel {
  characterPosition: Position;
  readonly watermelonPosition: Position;
  hitPosition: Position;
  isCollision: boolean;

  constructor() {
    this.characterPosition = { x: 80, y: 80, rotation: 0 };
    this.watermelonPosition = { x: 700, y: 20, rotation: 0 };
    this.hitPosition = calculateHitPosition(this.characterPosition);
    this.isCollision = false;
  }

  updatePosition(newPosition: Position): void {
    this.characterPosition = newPosition;
    this.hitPosition = calculateHitPosition(this.characterPosition);
  }

  checkCollision(player: Position, watermelon: Position) {
    const distance = Math.sqrt((player.x - watermelon.x) ** 2 + (player.y - watermelon.y) ** 2);
    this.isCollision = distance < 20;
  }
}
