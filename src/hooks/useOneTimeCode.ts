import { generateOneTimeCode } from "@/lib/OTC/generateOneTimeCode";
import { useEffect, useState } from "react";

/**
 * 一定時間ごとにOTPを生成する関数
 * @returns
 */
export const useOneTimeCode = () => {
  const [code, setCode] = useState<number>(generateOneTimeCode());

  useEffect(() => {
    const intervalOTC = setInterval(() => {
      setCode(generateOneTimeCode());
    }, 10000);

    return () => clearInterval(intervalOTC);
  }, []);

  return code;
};
