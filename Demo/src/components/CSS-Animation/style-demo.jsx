import { useState } from "react";

export function StyleDemo() {
  const [imageAnimation] = useState({
    animationName: "Spin",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate",
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <style>
        {`
          @keyframes Spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <img
        style={imageAnimation}
        src="Vivo T4.png"
        width="200"
        height="200"
        alt="Spinning"
      />
    </div>
  );
}