export default function QuestionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="question-selected">
      {children}
    </div>
  );
}
