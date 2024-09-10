"use client";

import { Button } from "@/components/ui/button";
import { HintProps } from "@/types/amerian2british";
import { useState } from "react";

export default function Hint({ hint }: HintProps) {
  const [isHint1, setIsHint1] = useState(false);
  const [isHint2, setIsHint2] = useState(false);
  return (
    <div className="">
      <div className="flex gap-2 py-2">
        <Button onClick={() => setIsHint1(!isHint1)}>
          <p>ヒント①：意味(英語)</p>
        </Button>
        <Button onClick={() => setIsHint2(!isHint2)}>
          <p>ヒント②：意味(日本語)</p>
        </Button>
      </div>
      <div className="flex gap-2 py-2">
        <p>{isHint1 ? hint?.hint_1 : ""}</p>
        <p>{isHint2 ? hint?.hint_2 : ""}</p>
      </div>
    </div>
  );
}
