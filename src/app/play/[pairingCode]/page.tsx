import GameController from "@/components/layouts/Game/GameController";

export default function Play({ params }: { params: { pairingCode: string } }) {
  return (
    <>
      <GameController pairingCode={params.pairingCode} />
    </>
  );
}
