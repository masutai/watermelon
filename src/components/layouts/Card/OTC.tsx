"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useOneTimeCode } from "@/hooks/useOneTimeCode";

// TODO: cookie
export default function OTCButton() {
  const code = useOneTimeCode();

  if (code === undefined) {
    return <p>コードを生成中...</p>; // コードが生成されるまでのローディング表示
  }

  return (
    <div>
      <p>OTC: {code}</p>
      <Button>
        <Link href={`/play/${code}`}>ペアリング</Link>
      </Button>
    </div>
  );
}
