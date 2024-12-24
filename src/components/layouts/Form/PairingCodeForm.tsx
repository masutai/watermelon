"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function PairingCodeForm() {
  const [code, setCode] = useState("");
  return (
    <form className="mx-auto max-w-4xl p-4 border border-gray-600 dark:border-white">
      <label htmlFor="pairingCode">
        プレイヤーから伝えられたコードを入力してください。入力後、スタートボタンを押してゲームを開始できます。
      </label>
      <br />
      <Input
        type="text"
        name="pairingCode"
        className="border p-1 my-5 border-gray-600 dark:border-white"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Link href={`/view/${code}`} className="bg-emerald-200 text-black text-2xl rounded-md p-1">
        スタート
      </Link>
    </form>
  );
}
