import { Position } from "@/types/position";
import { checkCollision } from "../checkCollision";

describe("checkCollision", () => {
  let hitPosition: Position;
  let watermelon: Position;
  beforeEach(() => {
    hitPosition = {
      x: 120,
      y: 100,
      rotation: 0
    };
    watermelon = {
      x: 120,
      y: 100,
      rotation: 0
    };
  });
  it("衝突している場合", () => {
    const result = checkCollision(hitPosition, watermelon);
    expect(result).toBe(true);
  });

  it("衝突していない場合", () => {
    hitPosition.y = 70;
    const result = checkCollision(hitPosition, watermelon);
    expect(result).toBe(false);
  });
});
