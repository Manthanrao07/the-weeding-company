import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function ResultPage() {
  const navigate = useNavigate();
  const score = 62; // sample value

  return (
    <div className="result-page-root" role="main" aria-labelledby="result-heading">
      <div className="result-wrapper">
        <div className="result-card" id="result-heading">
          <div style={{ marginBottom: 12, color: "#475569", fontSize: 18 }}>Keep Learning!</div>

          <h2
            className="font-serifDisplay"
            style={{
              background: "linear-gradient(90deg,#15313D 0%, #3CABDA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: 36,
              margin: "8px 0"
            }}
          >
            Your Final score is
          </h2>

          <div className="result-score" aria-hidden>
            {score}
            <span style={{ fontSize: 56, marginLeft: 8 }}>%</span>
          </div>

          <div style={{ marginTop: 40 }}>
            <button onClick={() => navigate("/")} className="primary-btn" aria-label="Start Again">Start Again</button>
          </div>
        </div>
      </div>
    </div>
  );
}
