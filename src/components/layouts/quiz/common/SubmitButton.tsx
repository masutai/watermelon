interface SubmitButtonProps {
  disabled?: boolean;
}

export default function SubmitButton({ disabled = false }: SubmitButtonProps) {
  return (
    <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={disabled}>
      回答する
    </button>
  );
}
