import { GameModel } from "@/lib/game/gameModel";
import { getPusherInstance } from "@/lib/pusher/server";

const pusherServer = getPusherInstance();
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { characterPosition, watermelonPosition, hitPosition, isCollision, pairingCode } =
    await req.json();
  try {
    await pusherServer.trigger(`private-game-${pairingCode}`, "evt::game", {
      characterPosition,
      watermelonPosition,
      hitPosition,
      isCollision
    } as GameModel);

    return Response.json(
      { gameModel: { characterPosition, watermelonPosition, hitPosition, isCollision } },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Failed to send message", error: error }, { status: 500 });
  }
}
