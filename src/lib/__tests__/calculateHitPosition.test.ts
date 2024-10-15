import { Position } from "@/types/position";
import { calculateHitPosition } from "../calculateHitPosition";

describe("calculateHitPosition", () => {
  let characterPosition: Position;
  
  beforeEach(() => {
    characterPosition = { x: 80, y: 80, rotation: 0 };
  });
  
  it("0度の場合", () => {
    const hitPosition = calculateHitPosition(characterPosition);
    expect(hitPosition).toEqual({ x: 100, y: 60, rotation: 0 });
  });
  
  it("90度の場合", () => {
    characterPosition.rotation = 90;
    const hitPosition = calculateHitPosition(characterPosition);
    expect(hitPosition).toEqual({ x: 140, y: 100, rotation: 90 });
  });
  
  it("180度の場合", () => {
    characterPosition.rotation = 180;
    const hitPosition = calculateHitPosition(characterPosition);
    expect(hitPosition).toEqual({ x: 100, y: 140, rotation: 180 });
  });

  it("270度の場合", () => {
    characterPosition.rotation = 270;
    const hitPosition = calculateHitPosition(characterPosition);
    expect(hitPosition).toEqual({ x: 60, y:100, rotation: 270})
  })
});
