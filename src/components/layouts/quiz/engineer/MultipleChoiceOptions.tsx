interface MultipleChoiceOptionsProps {
  options: string[];
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
}

export default function MultipleChoiceOptions({
  options,
  selectedAnswer,
  onSelect
}: MultipleChoiceOptionsProps) {
  return (
    <div className="mb-4 flex gap-4">
      {options.map((option, index) => (
        <div key={index} className="mb-2">
          <input
            type="radio"
            id={`option-${index}`}
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => onSelect(option)}
            className="mr-2"
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}
