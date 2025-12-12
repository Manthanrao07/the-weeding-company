import React from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <div className="app-container">
        <div className="figma-card">
          <div className="figma-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
