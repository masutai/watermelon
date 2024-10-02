export class Position {
  readonly x: number;
  readonly y: number;
  readonly rotation: number;

  constructor(x: number, y: number, rotation: number) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
  }

  public getDistance(target: Position): number {
    return Math.sqrt((this.x - target.x) ** 2 + (this.y - target.y) ** 2);
  }

  public move(deltaX: number, deltaY: number): Position {
    return new Position(this.x + deltaX, this.y + deltaY, this.rotation);
  }

  public rotate(deltaRotation: number): Position {
    return new Position(this.x, this.y, this.rotation + deltaRotation);
  }
}
