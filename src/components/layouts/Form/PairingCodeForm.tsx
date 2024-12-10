"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function PairingCodeForm() {
  const [code, setCode] = useState("");
  return (
    <form>
      <Input
        type="text"
        name="pairingCode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Link href={`/view/${code}`}>登録</Link>
    </form>
  );
}
