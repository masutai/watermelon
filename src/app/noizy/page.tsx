"use client";

import { RefObject, useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const generateStorm = (ref: RefObject<HTMLCanvasElement | null>) => {
    if (!ref.current) return;
    const context = ref.current?.getContext("2d");
    const src = context?.getImageData(0, 0, ref.current?.width, ref.current?.height) as ImageData;
    const dst = context?.createImageData(ref.current?.width, ref.current?.height) as ImageData;
    for (let i = 0; i < src?.data?.length; i += 4) {
      if (dst) {
        dst.data[i] = dst.data[i + 1] = dst.data[i + 2] = Math.ceil(Math.random() * 255);
        dst.data[i + 3] = 255;
      }
    }
    context?.putImageData(dst, 0, 0);
  };

  setInterval(() => {
    generateStorm(canvasRef);
  }, 100);
  return (
    <div>
      <canvas className="min-w-full" ref={canvasRef}></canvas>
    </div>
  );
}
