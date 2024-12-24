import GameController from "@/components/layouts/Game/GameController";

export default async function Play({ params }: { params: Promise<{ pairingCode: string }> }) {
  const pairingCode = (await params).pairingCode;
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Game</h1>
      <h3>ペアリングコード：{pairingCode}</h3>
      <GameController pairingCode={pairingCode} />
    </>
  );
}
