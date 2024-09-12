"use client";

import { useQuizLogic } from "@/hooks/useQuizLogic";
import { QuizData, isBritishQuizItem, isEngineerQuizItem } from "@/types/quiz";
import { useEffect } from "react";
import BritishQuizForm from "./BritishQuizForm";
import EngineerQuizForm from "./EngineerQuizForm";
import ResultDisplay from "./common/ResultDisplay";

export default function QuizForm({ quizData }: { quizData: QuizData }) {
  const { currentQuestion, updateQuestion, isCorrect, setIsCorrect } = useQuizLogic(quizData.items);

  useEffect(() => {
    updateQuestion();
  }, []);

  const handleSubmit = (isAnswerCorrect: boolean) => {
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setTimeout(() => {
        updateQuestion();
        setIsCorrect(null);
      }, 1500);
    }
  };

  const renderQuizForm = () => {
    if (!currentQuestion) return null;

    if (isBritishQuizItem(currentQuestion)) {
      return <BritishQuizForm question={currentQuestion} onSubmit={handleSubmit} />;
    } else if (isEngineerQuizItem(currentQuestion)) {
      return <EngineerQuizForm question={currentQuestion} onSubmit={handleSubmit} />;
    }
  };

  return (
    <>
      {renderQuizForm()}
      <ResultDisplay isCorrect={isCorrect} />
    </>
  );
}
