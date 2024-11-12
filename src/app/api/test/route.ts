import { getPusherInstance } from "@/lib/pusher/server";

const pusherServer = getPusherInstance();
export const dynamic = "force-dynamic";

export type ReturnDataType = {
  message: string;
  user: string;
  date: Date;
};

export async function POST(req: Request) {
  const { user, message } = await req.json();
  try {
    await pusherServer.trigger("private-chat", "evt::test", {
      user,
      message,
      date: new Date()
    } as ReturnDataType);

    return Response.json({ message: "Sockets tested" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to send message", error: error }, { status: 500 });
  }
}
