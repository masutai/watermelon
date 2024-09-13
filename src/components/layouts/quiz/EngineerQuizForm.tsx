import { EngineerQuizItem } from "@/types/quiz";
import { useMemo, useState } from "react";
import QuestionDisplay from "./common/QuestionDisplay";
import SubmitButton from "./common/SubmitButton";
import CodeExample from "./engineer/CodeExample";
import MultipleChoiceOptions from "./engineer/MultipleChoiceOptions";

interface EngineerQuizFormProps {
  question: EngineerQuizItem;
  onSubmit: (isCorrect: boolean) => void;
  questionCount: number;
}

export default function EngineerQuizForm({
  question,
  onSubmit,
  questionCount
}: EngineerQuizFormProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const randomSortedOptions = useMemo(() => {
    return [...question.options].sort(() => Math.random() - 0.5);
  }, [question.options, questionCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer.length > 0) {
      const set1 = new Set(selectedAnswer);
      const set2 = new Set(question.answers);
      onSubmit(set1.size === set2.size && selectedAnswer.every((answer) => set2.has(answer)));
    }
    setSelectedAnswer([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionDisplay question={question.question} />
      <CodeExample code={question.exampleCode} />
      <MultipleChoiceOptions
        options={randomSortedOptions}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
      />
      <SubmitButton disabled={selectedAnswer.length === 0} />
    </form>
  );
}
