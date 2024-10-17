"use client";

import { Button } from "@/components/ui/button";
import { useOneTimeCode } from "@/hooks/useOneTimeCode";
import Link from "next/link";
import { useState } from "react";

// TODO: cookie
export default function OTCButton() {
  const [pairingCode, setPairingCode] = useState<number | undefined>(undefined);
  const code = useOneTimeCode();

  if (code === undefined) {
    return <p>コードを生成中...</p>; // コードが生成されるまでのローディング表示
  }

  return (
    <div>
      <p>OTC: {code}</p>
      <Button onClick={() => setPairingCode(code)}>
        <Link href={`/play/${code}`}>ペアリング</Link>
      </Button>
    </div>
  );
}
