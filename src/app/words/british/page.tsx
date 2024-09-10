import QuizForm from "@/components/layouts/QuizForm/quizform";

import { AmericanToBritish } from "@/types/amerian2british";

export default async function British() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/words/british`);
  if (!res.ok) {
    throw new Error("Failed to fetch words");
  }
  const words: AmericanToBritish[] = await res.json();
  return (
    <div className="pt-5">
      <h1>British</h1>
      <div>
        <QuizForm words={words} />
      </div>
    </div>
  );
}
