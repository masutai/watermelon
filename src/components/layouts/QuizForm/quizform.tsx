"use client";

import { AmericanToBritish } from "@/types/amerian2british";
import { useEffect, useState } from "react";

export default function QuizForm({ words }: { words: AmericanToBritish[] }) {
  const [answer, setAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<AmericanToBritish | null>(null);

  useEffect(() => {
    getNextQuestion();
  }, []);

  const getNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentQuestion(words[randomIndex]);
    setAnswer("");
    setIsCorrect(null);
  };

  const handleSubmit = (ans: string) => {
    if (currentQuestion && ans === currentQuestion.british_spelling) {
      setIsCorrect(true);
      setTimeout(() => {
        getNextQuestion();
      }, 1500);
    } else {
      setIsCorrect(false);
    }
  };

  if (!currentQuestion) return <p>読み込み中...</p>;

  return (
    <>
      <div>
        <p>{currentQuestion.american_spelling}をイギリス英語に直してください</p>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button onClick={() => handleSubmit(answer)}>提出</button>
      </div>
      <p>入力したもの：{answer}</p>
      {isCorrect !== null && (
        <p>{isCorrect ? "正解！次の問題に進みます。" : "不正解。もう一度試してください。"}</p>
      )}
    </>
  );
}
