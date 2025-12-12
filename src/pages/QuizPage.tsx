import React, { useState, useEffect, useCallback } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import AnswerOption from "../components/AnswerOption";
import NavButtons from "../components/NavButtons";
import PawSticker from "../components/PawSticker";
import { questions } from "../data/mock";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const q = questions[index];

  const handleNext = useCallback(() => {
    if (index < questions.length - 1) setIndex(i => i + 1);
    else navigate("/result");
  }, [index, navigate]);

  const handlePrev = useCallback(() => {
    setIndex(i => Math.max(0, i - 1));
  }, []);

  const handleSelect = (optId: string) => setSelected(s => ({ ...s, [q.id]: optId }));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  return (
    <LayoutWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ textAlign: "center" }}>
          <Heading />
          <ProgressBar steps={questions.length} current={index + 1} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <QuestionCard>
            <div style={{ fontSize: 18 }}>{q.text}</div>
          </QuestionCard>

          <div className="options-wrapper" style={{ width: "100%" }}>
            {q.options.map(o => (
              <AnswerOption
                key={o.id}
                text={o.text}
                selected={selected[q.id] === o.id}
                onClick={() => handleSelect(o.id)}
              />
            ))}
          </div>

          <NavButtons
            onPrev={handlePrev}
            onNext={handleNext}
            showSubmit={index === questions.length - 1}
            onSubmit={() => navigate("/result")}
          />
        </div>

        {/* Paw sticker only on first slide */}
        {index === 0 && <PawSticker />}
      </div>
    </LayoutWrapper>
  );
}
