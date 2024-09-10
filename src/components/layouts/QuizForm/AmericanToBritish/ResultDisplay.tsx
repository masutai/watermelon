export default function ResultDisplay({ isCorrect }: { isCorrect: boolean | null }) {
  if (isCorrect === null) return null;

  return <p>{isCorrect ? "正解！次の問題に進みます。" : "不正解。もう一度試してください。"}</p>;
}
