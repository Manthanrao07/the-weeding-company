export default function AnswerOption({
  text,
  selected,
  onClick
}: {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`option-btn ${selected ? "option-selected" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
