import { QuizItem } from "@/types/quiz";
import { useCallback, useState } from "react";

export function useQuizLogic(items: QuizItem[]) {
  const [currentQuestion, setCurrentQuestion] = useState<QuizItem | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const updateQuestion = useCallback(() => {
    const newIndex = Math.floor(Math.random() * items.length);
    setCurrentQuestion(items[newIndex]);
  }, [items]);

  return {
    currentQuestion,
    updateQuestion,
    isCorrect,
    setIsCorrect
  };
}
