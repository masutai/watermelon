import QuizForm from "@/components/layouts/quiz/QuizForm";
import { fetchWords } from "@/lib/fetch";
import { BritishQuizItem, QuizData } from "@/types/quiz";
import { Suspense } from "react";
export default function British() {
  return (
    <div className="pt-5">
      <h1>British</h1>
      <div>
        <Suspense fallback={<p>読み込み中...</p>}>
          <QuizContent />
        </Suspense>
      </div>
    </div>
  );
}

async function QuizContent() {
  const words = await fetchWords();
  const quizData: QuizData = {
    items: words.map(
      (word) =>
        ({
          question: word.american_spelling,
          answer: word.british_spelling,
          word_type: word.word_type,
          meaning_eng: word.meaning_eng,
          meaning_ja: word.meaning_ja,
          hint: {
            hint_1: word.meaning_eng,
            hint_2: word.meaning_ja,
            hint_3: word.hint_type
          }
        }) as BritishQuizItem
    ),
    type: "british"
  };
  return <QuizForm quizData={quizData} />;
}
