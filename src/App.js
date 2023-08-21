import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Clear the interval when count reaches or exceeds 100
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [count]);
  return (
    <div className="App">
      <div>Progress Bar</div>
      <ProgressBar count={count} onComplete={() => setSucess(true)} />
      <span>{sucess ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
