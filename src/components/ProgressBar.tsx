import React from "react";

type Props = {
  steps: number;
  current: number;
};

const ProgressBar = ({ steps, current }: Props) => {
  return (
    <div className="progress-row">
      {Array.from({ length: steps }).map((_, i) => (
        <div
          key={i}
          className={`progress-bar ${i < current ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;

