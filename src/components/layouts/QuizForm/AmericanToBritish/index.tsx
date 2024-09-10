"use client";

import { AmericanToBritish, AmericanToBritishWithHint } from "@/types/amerian2british";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import AnswerForm from "./AnswerForm";
import Hint from "./Hint";
import QuestionDisplay from "./QuestionDisplay";
import ResultDisplay from "./ResultDisplay";

export default function QuizForm({ words }: { words: AmericanToBritish[] }) {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<AmericanToBritish | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizHint, setQuizHint] = useState<AmericanToBritishWithHint | null>(null);

  const form = useForm<{ answer: string }>({
    defaultValues: {
      answer: ""
    }
  });

  const onSubmit = (data: FieldValues) => {
    if (currentQuestion) {
      const isAnswerCorrect =
        (data.answer as string).toLowerCase() === currentQuestion.british_spelling.toLowerCase();
      setIsCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        setTimeout(() => {
          setCurrentIndex(Math.floor(Math.random() * words.length));
          setCurrentQuestion(words[currentIndex]);
          setIsCorrect(null);
          form.reset();
        }, 1500);
      }
    }
  };

  useEffect(() => {
    setCurrentQuestion(words[currentIndex]);
    setQuizHint({
      hint_1: words[currentIndex].meaning_eng,
      hint_2: words[currentIndex].meaning_ja
    });
  }, [words, currentIndex]);

  return (
    <>
      <QuestionDisplay question={currentQuestion} />
      <Hint hint={quizHint ?? undefined} />
      <AnswerForm onSubmit={onSubmit} form={form} />
      <ResultDisplay isCorrect={isCorrect} />
    </>
  );
}
