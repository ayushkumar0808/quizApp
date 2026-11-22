import { useEffect } from "react";
import { useState } from "react";

export const Timer = () => {
  let [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer == 0) {
        clearInterval(id);
        return;
      }
      timer--;
      setTimer(timer);
      console.log(timer);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      Timer: <span>{timer}</span>
    </div>
  );
};
