import { GameModel } from "./gameModel";
import { Position } from "@/types/position";

describe("GameModelクラスのテスト", () => {
  let gameModel: GameModel;
  beforeEach(() => {
    gameModel = new GameModel();
  });
  it("コンストラクターが正しく初期化されている", () => {
    expect(gameModel.characterPosition).toEqual({ x: 80, y: 80, rotation: 0 });
    expect(gameModel.watermelonPosition).toEqual({ x: 700, y: 20, rotation: 0 });
    expect(gameModel.hitPosition).toEqual({ x: 100, y: 60, rotation: 0 });
    expect(gameModel.isCollision).toBe(false);
  });

  it("updateCharacterPositionメソッドが正しく動作する", () => {
    const newPosition: Position = { x: 100, y: 100, rotation: 90 };
    gameModel.updateCharacterPosition(newPosition);
    expect(gameModel.characterPosition).toEqual(newPosition);
    expect(gameModel.hitPosition).toEqual({ x: 160, y: 120, rotation: 90 });
  });

  it("updateWatermelonPositionメソッドが正しく動作する", () => {
    const newPosition: Position = { x: 100, y: 100, rotation: 90 };
    gameModel.updateWatermelonPosition(newPosition);
    expect(gameModel.watermelonPosition).toEqual(newPosition);
  });

  it("checkCollisionメソッドが正しく動作する", () => {
    const player: Position = { x: 100, y: 100, rotation: 0 };
    const watermelon: Position = { x: 100, y: 100, rotation: 0 };
    gameModel.checkCollision(player, watermelon);
    expect(gameModel.isCollision).toBe(true);
  });
});
