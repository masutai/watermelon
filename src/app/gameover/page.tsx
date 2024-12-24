import Link from "next/link";

export default function GameOverPage() {
  return (
    <div>
      <p>ゲームオーバー</p>
      <Link href={"/"}>メイン画面に戻る</Link>
    </div>
  );
}
