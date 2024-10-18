import GameSpectate from "@/components/layouts/Game/GameSpectate";

export default function View({ params }: { params: { pairingCode: string } }) {
  return <GameSpectate pairingCode={params.pairingCode} />;
}
