"use client";

import CardTemplate from "@/components/layouts/Card/CardTemplate";
import OTCButton from "@/components/layouts/Card/OTC";

export default function Home() {
  return (
    <main className="">
      <CardTemplate
        title="ペアリング"
        content="ペアリングコードを生成し、プレイページへ遷移する"
        ButtonComponent={OTCButton}
      />
      <CardTemplate title="プレイする" content="" link="/play" buttonText="Click here" />
      <CardTemplate title="プレイする" content="" link="/play" buttonText="Click here" />
      <CardTemplate title="応援する" content="" link="/view" buttonText="Click here" />
    </main>
  );
}
