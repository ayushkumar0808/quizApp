import { useEffect } from "react";
import { useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let intId = setInterval(() => {
      setTimer((p) => (p > 0 ? p - 1 : clearInterval(intId)));
    }, 1000);

    return () => clearInterval(intId);
  }, []);

  return (
    <div>
      Timer: <span>{timer}</span>
    </div>
  );
};
