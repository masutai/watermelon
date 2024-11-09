import GameController from "@/components/layouts/Game/GameController";

export default async function Play({ params }: { params: Promise<{ pairingCode: string }> }) {
  const pairingCode = (await params).pairingCode;
  return (
    <>
      <GameController pairingCode={pairingCode} />
    </>
  );
}
