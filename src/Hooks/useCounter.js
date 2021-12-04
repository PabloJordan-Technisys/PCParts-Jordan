import { useState } from "react";

export const useCounter = (initial = 1, stock, min) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    counter < stock && setCounter(counter + 1);
  };

  const decrement = () => {
    counter > min && setCounter(counter - 1);
  };

  return { counter, increment, decrement };
};
