import { EngineerQuizItem } from "@/types/quiz";
import { useState } from "react";
import QuestionDisplay from "./common/QuestionDisplay";
import SubmitButton from "./common/SubmitButton";
import CodeExample from "./engineer/CodeExample";
import MultipleChoiceOptions from "./engineer/MultipleChoiceOptions";

interface EngineerQuizFormProps {
  question: EngineerQuizItem;
  onSubmit: (isCorrect: boolean) => void;
}

export default function EngineerQuizForm({ question, onSubmit }: EngineerQuizFormProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer !== null) {
      onSubmit(selectedAnswer === question.answer);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionDisplay question={question.question} />
      <CodeExample code={question.exampleCode} />
      <MultipleChoiceOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
      />
      <SubmitButton disabled={!selectedAnswer} />
    </form>
  );
}
