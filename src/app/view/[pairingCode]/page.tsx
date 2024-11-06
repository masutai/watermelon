import GameSpectate from "@/components/layouts/Game/GameSpectate";

export default async function View({ params }: { params: Promise<{ pairingCode: string }> }) {
  const pairingCode = (await params).pairingCode;
  return <GameSpectate pairingCode={pairingCode} />;
}
