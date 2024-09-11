interface ResultDisplayProps {
  isCorrect: boolean | null;
}

export default function ResultDisplay({ isCorrect }: ResultDisplayProps) {
  if (isCorrect === null) return null;

  return (
    <div className={`p-2 ${isCorrect ? "bg-green-100 text-black" : "bg-red-100"}`}>
      {isCorrect ? "正解です！" : "不正解です。もう一度試してください。"}
    </div>
  );
}
