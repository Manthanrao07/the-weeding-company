import React from "react";

type Props = {
  onPrev?: () => void;
  onNext?: () => void;
  showSubmit?: boolean;
  onSubmit?: () => void;
};

export default function NavButtons({ onPrev = () => {}, onNext = () => {}, showSubmit = false, onSubmit = () => {} }: Props) {
  return (
    <div className="nav-area" role="group" aria-label="Quiz navigation">
      <button className="nav-btn" onClick={onPrev} aria-label="Previous">←</button>

      {!showSubmit && (
        <button className="nav-btn primary" onClick={onNext} aria-label="Next">→</button>
      )}

      {showSubmit && (
        <button className="submit-btn" onClick={onSubmit} aria-label="Submit">Submit</button>
      )}
    </div>
  );
}
