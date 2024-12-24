"use client";

import CardTemplate from "@/components/layouts/Card/CardTemplate";
import OTCButton from "@/components/layouts/Card/OTC";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-4">
      <CardTemplate
        title="プレイヤー"
        content="プレイボタンを押すことで、プレイヤーとしてゲームを開始できます。"
        ButtonComponent={OTCButton}
      />
      <CardTemplate
        title="サポーター"
        content="サポーターとして始める場合、サポートボタンを押します。プレイヤーから伝えられたコードを遷移後の画面で入力してください。"
        link="/view"
        buttonText="サポート"
      />
    </main>
  );
}
