interface MultipleChoiceOptionsProps {
  options: string[];
  selectedAnswer: string[];
  onSelect: (answer: string[]) => void;
}

export default function MultipleChoiceOptions({
  options,
  selectedAnswer,
  onSelect
}: MultipleChoiceOptionsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      onSelect([...selectedAnswer, value]);
    } else {
      onSelect(selectedAnswer.filter((answer) => answer !== value));
    }
  };
  return (
    <div className="mb-4 flex gap-4">
      {options.map((option, index) => (
        <div key={index} className="mb-2">
          <input
            type="checkbox"
            id={`option-${index}`}
            name="answer"
            value={option}
            checked={selectedAnswer.includes(option)}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}
