import { memo, useState, useEffect } from "react";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setIsRunning(false)
    setSecond(0)
  }

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    if (isRunning) {
      const timerID = setInterval(() => {
        setSecond((prev) => {
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [isRunning]);

  return (
    <div>
      <h2>StopWatch</h2>
      <div>
        {formatTime(second)}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          gap: "5px",
        }}
      >
        <button disabled={isRunning} onClick={() => setIsRunning(true)}>Start</button>
        <button disabled={!isRunning} onClick={() => setIsRunning(false)}>Stop</button>
        <button disabled={second===0} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default memo(StopWatch);
