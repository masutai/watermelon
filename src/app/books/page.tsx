"use client";

import Link from "next/link";
import { useState } from "react";

export default function Books() {
  const [link, setLink] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter a link"
      />
      <div>
        <Link
          href={`https://www.google.com/search?q=${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </Link>
      </div>
      <div>
        <Link
          href={`https://www.amazon.co.jp/s?k=${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon
        </Link>
      </div>
      {link && <p>入力されたリンク: {link}</p>}
    </div>
  );
}
