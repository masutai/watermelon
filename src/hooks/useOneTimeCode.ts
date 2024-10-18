import { generateOneTimeCode } from "@/lib/OTC/generateOneTimeCode";
import { useEffect, useState } from "react";

/**
 * 一定時間ごとにOTPを生成する関数
 * @returns
 */
export const useOneTimeCode = () => {
  const [code, setCode] = useState<number | null>(null);

  useEffect(() => {
    const generateCode = () => {
      setCode(generateOneTimeCode());
    };

    generateCode(); // 初回コード生成

    const intervalOTC = setInterval(generateCode, 10000); // 10秒ごとに新しいコードを生成

    return () => clearInterval(intervalOTC);
  }, []);

  return code;
};
