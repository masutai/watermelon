import { getPusherInstance } from "@/lib/pusher/server";

const pusherServer = getPusherInstance();

export async function POST(req: Request) {
  console.log("Pusher auth endpoint hit");
  const data = await req.text();
  const [socketId, channelName] = data.split("&").map((str) => str.split("=")[1]);

  const authResponse = pusherServer.authenticate(socketId, channelName);
  return new Response(JSON.stringify(authResponse), { status: 200 });
}
