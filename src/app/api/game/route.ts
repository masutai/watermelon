import { GameModel } from "@/lib/game/gameModel";
import { getPusherInstance } from "@/lib/pusher/server";

const pusherServer = getPusherInstance();
export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  const { characterPosition, watermelonPosition, hitPosition, isCollision } = await req.json();
  try {
    await pusherServer.trigger("private-game", "evt::game", {
      characterPosition,
      watermelonPosition,
      hitPosition,
      isCollision
    } as GameModel);

    return Response.json({ message: "Sockets tested" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to send message", error: error }, { status: 500 });
  }
}
