import { useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(10);
  setInterval(() => {
    setTimer(timer - 1);
  }, 1000);
  return (
    <div>
      Timer: <span>{timer}</span>
    </div>
  );
};
