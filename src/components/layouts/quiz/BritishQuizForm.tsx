import { BritishQuizItem } from "@/types/quiz";
import { useState } from "react";
import AnswerInput from "./british/AnswerInput";
import Hint from "./british/Hint";
import QuestionDisplay from "./common/QuestionDisplay";
import SubmitButton from "./common/SubmitButton";

interface BritishQuizFormProps {
  question: BritishQuizItem;
  onSubmit: (isCorrect: boolean) => void;
}

export default function BritishQuizForm({ question, onSubmit }: BritishQuizFormProps) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = answer.toLowerCase() === question.answer.toLowerCase();
    onSubmit(isCorrect);
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionDisplay question={question.question} />
      <Hint hint={question.hint} />
      <AnswerInput value={answer} onChange={setAnswer} />
      <SubmitButton />
    </form>
  );
}
