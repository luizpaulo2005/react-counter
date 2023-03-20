import { useEffect, useState } from "react";

export const App = () => {
  const initial_time_in_seconds = 25 * 60; //25 Minutes

  const [time, setTime] = useState(initial_time_in_seconds);
  const [isRunning, setIsRunning] = useState(false);

  var hours = Math.floor(time / 3600)
  var minutes = Math.floor(time / 60)
  var seconds = time % 60;

  if (hours >= 1){
    minutes = minutes - 60 * hours
  }

  useEffect(() => {
    isRunning && time > 0 && setTimeout(() => setTime((state) => state - 1), 1000);
  }, [time, isRunning]);

  return (
    <div>
      <button onClick={() => {setIsRunning(true); setTime(initial_time_in_seconds)}}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setIsRunning(true)}>Continuar</button>

      <input placeholder="Digite o tempo em segundos" type="number" disabled={isRunning} value={time} onChange={e => setTime(parseInt(e.target.value))}/>
      <br/>

      <span>{hours.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};
