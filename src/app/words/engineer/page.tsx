import QuizForm from "@/components/layouts/quiz/QuizForm";
import { fetchErrorMessage } from "@/lib/fetch";
import { EngineerQuizItem, QuizData } from "@/types/quiz";
import { Suspense } from "react";

export default function Engineer() {
  return (
    <div className="pt-10">
      <h1>Engineer</h1>
      <div>
        <Suspense fallback={<p>読み込み中...</p>}>
          <QuizContent />
        </Suspense>
      </div>
    </div>
  );
}

async function QuizContent() {
  const errorMessages = await fetchErrorMessage();
  const quizData: QuizData = {
    items: errorMessages.map(
      (message) =>
        ({
          question: message.message,
          answer: message.message,
          exampleCode: message.exampleCode,
          options: message.options,
          answers: message.answers
        }) as EngineerQuizItem
    ),
    type: "engineer"
  };
  return <QuizForm quizData={quizData} />;
}
