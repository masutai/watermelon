import { AmericanToBritish } from "@/types/amerian2british";

export default function QuestionDisplay({ question }: { question: AmericanToBritish | null }) {
  if (!question) return <p>読み込み中...</p>;

  return <p>{question.american_spelling}をイギリス英語に直してください</p>;
}
