import { BritishQuizItem } from "@/types/quiz";

interface HintProps {
  hint?: BritishQuizItem["hint"];
}

export default function Hint({ hint }: HintProps) {
  if (!hint) return null;

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">ヒント：</h3>
      <p>{hint.hint_1}</p>
      <p>{hint.hint_2}</p>
      {hint.hint_3 && <p>{hint.hint_3}</p>}
    </div>
  );
}
