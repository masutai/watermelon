import { Position } from "@/types/position";

interface GameViewProps {
  characterPosition: Position;
  watermelonPosition: Position;
  hitPosition: Position;
}

export default function GameView({
  characterPosition,
  watermelonPosition,
  hitPosition
}: GameViewProps) {
  return (
    <>
      <div className="relative overflow-hidden border border-teal-300 h-full">
        <div className="max-h-screen h-screen bg-amber-500 text-black">
          <div
            className="absolute w-10 h-10 bg-green-800 rounded-full"
            style={{
              left: `${watermelonPosition.x}px`,
              top: `${watermelonPosition.y}px`,
              transform: `rotate(${watermelonPosition.rotation}deg)`
            }}
          />
        </div>
        <div
          className="absolute w-10 h-10 bg-blue-500 rounded-sm transition-all duration-75"
          style={{
            left: `${characterPosition.x}px`,
            top: `${characterPosition.y}px`,
            transform: `rotate(${characterPosition.rotation}deg)`
          }}
        >
          <div className="relative top-[-20px] left-5 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div
          className="absolute w-1 h-1 bg-teal-100 rounded-full transition-all duration-75"
          style={{
            top: `${hitPosition.y}px`,
            left: `${hitPosition.x}px`
          }}
        />
        <div
          className="absolute w-1 h-1 bg-teal-500 rounded-full transition-all duration-75"
          style={{
            left: `${watermelonPosition.x + 20}px`,
            top: `${watermelonPosition.y + 20}px`
          }}
        />
      </div>
    </>
  );
}