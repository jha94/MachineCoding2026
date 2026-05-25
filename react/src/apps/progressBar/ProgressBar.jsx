import { memo, useEffect, useState } from "react";
const MAX_STEPS = 10;
const TICK_RATE_MS = 1000;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || progress >= MAX_STEPS) return;
    const timerId = setInterval(() => {
      setProgress((prevCount) => {
        return prevCount < MAX_STEPS ? prevCount + 1 : prevCount;
      });
    }, TICK_RATE_MS);
    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  const isCompleted = progress >= MAX_STEPS;

  return (
    <div>
      <h2>ProgressBar</h2>
      <div
        style={{
          width: "300px",
          height: "20px",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${progress * 10}%`,
            height: "100%",
            borderRadius: "10px",
            backgroundColor: "lightgreen",
            transition: isRunning && "width 1s linear",
            willChange: "width",
          }}
        ></div>
      </div>
      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button
          disabled={isRunning || isCompleted}
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          disabled={!isRunning || isCompleted}
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button disabled={progress === 0} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(ProgressBar);
