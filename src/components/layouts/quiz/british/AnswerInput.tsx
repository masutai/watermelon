interface AnswerInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AnswerInput({ value, onChange }: AnswerInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 mr-2"
      placeholder="回答を入力"
      required
    />
  );
}
