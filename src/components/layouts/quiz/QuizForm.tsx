"use client";

import { useQuizLogic } from "@/hooks/useQuizLogic";
import { QuizData, isBritishQuizItem, isEngineerQuizItem } from "@/types/quiz";
import { useEffect, useState } from "react";
import BritishQuizForm from "./BritishQuizForm";
import EngineerQuizForm from "./EngineerQuizForm";
import ResultDisplay from "./common/ResultDisplay";

export default function QuizForm({ quizData }: { quizData: QuizData }) {
  const { currentQuestion, updateQuestion, isCorrect, setIsCorrect } = useQuizLogic(quizData.items);
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    updateQuestion();
  }, []);

  const handleSubmit = (isAnswerCorrect: boolean) => {
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setTimeout(() => {
        updateQuestion();
        setIsCorrect(null);
        setQuestionCount((prev) => prev + 1);
      }, 1500);
    }
  };

  const renderQuizForm = () => {
    if (!currentQuestion) return null;

    if (isBritishQuizItem(currentQuestion)) {
      return <BritishQuizForm question={currentQuestion} onSubmit={handleSubmit} />;
    } else if (isEngineerQuizItem(currentQuestion)) {
      return (
        <EngineerQuizForm
          question={currentQuestion}
          onSubmit={handleSubmit}
          questionCount={questionCount}
        />
      );
    }
  };

  return (
    <>
      {renderQuizForm()}
      <ResultDisplay isCorrect={isCorrect} />
    </>
  );
}
