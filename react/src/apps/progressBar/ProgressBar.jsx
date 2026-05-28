import { memo, useState, useEffect } from "react";

const MAX_STEP = 10;
const DELAY = 1000;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || progress >= MAX_STEP) return;
    let timer;
    timer = setInterval(() => {
      setProgress((prevValue) => {
        return prevValue < MAX_STEP ? prevValue + 1 : prevValue;
      });
    }, DELAY);
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div>
      <h2>ProgressBar</h2>
      <div
        style={{
          height: "20px",
          width: "300px",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress * 10}%`,
            backgroundColor: "lightgreen",
            borderRadius: "10px",
            transition: "width 1s linear",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          gap: "8px",
        }}
      >
        <button disabled={progress > 0} onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button
          disabled={progress < 1 || progress >= MAX_STEP}
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button disabled={progress < 1} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(ProgressBar);
