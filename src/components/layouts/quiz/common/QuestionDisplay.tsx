import { QuizItem } from "@/types/quiz";

interface QuestionDisplayProps {
  question: QuizItem["question"] | undefined;
}

export default function QuestionDisplay({ question }: QuestionDisplayProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">問題：</h2>
      <p>{question || "問題を読み込み中..."}</p>
    </div>
  );
}
