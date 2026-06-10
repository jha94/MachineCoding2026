import { memo, useState, useEffect } from "react";
import Bar from "./Bar";

const MultiProgressBar = () => {
  const [activeProgressBars, setActiveProgressBars] = useState([]);
  const [waitingProgressBars, setWaitingProgressBars] = useState([]);

  useEffect(() => {
    if (activeProgressBars.length === 0 || waitingProgressBars.length === 0)
      return;
    if (activeProgressBars[0].progress === 10) {
      setWaitingProgressBars((prev) => {
        const updated = [...prev];
        const firstWaiting = updated.shift(); // remove from front (queue order)
        setActiveProgressBars((active) => [...active, firstWaiting]);
        return updated;
      });
    }
  }, [activeProgressBars]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProgressBars((prev) => {
        if (prev.length === 0) return prev;
        const updated = [...prev];
        return updated.map((progressBar) => {
          return {
            progress: progressBar.progress + 1,
          };
        });
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>MultiProgressBar</h2>
      {activeProgressBars.map((activeProgressBar) => {
        return <Bar progress={activeProgressBar?.progress} />;
      })}
      <button
        onClick={() => {
          activeProgressBars.length < 3
            ? setActiveProgressBars((prev) => [...prev, { progress: 0 }])
            : setWaitingProgressBars((prev) => [...prev, { progress: 0 }]);
        }}
      >
        Add Progress Bar
      </button>
    </div>
  );
};

export default memo(MultiProgressBar);
