import { useEffect, useState } from "react";

const ProgressBar = ({ count, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(count);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(count, 0)));

    if (count >= 100) {
      onComplete();
    }
  }, [count]);

  return (
    <>
      <div className="progress-bar">
        <span style={{ color: percent > 50 ? "gray" : "black" }}>
          {percent.toFixed()}%
        </span>
        <div
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent.toFixed()}
        />
      </div>
    </>
  );
};

export default ProgressBar;
