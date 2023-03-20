import { useEffect, useState } from "react";

export const App = () => {
  const initial_time_in_seconds = 25 * 60; //25 Minutes

  const [time, setTime] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startTimer = () => {
    setTime(initial_time_in_seconds);
  }

  useEffect(() => {
    time > 0 && setTimeout(() => setTime((state) => state - 1), 1000);
  }, [time]);

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <br/>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};
