import React, { useState, useEffect } from 'react';

const useCounter = (finalNumber : number, interval = 1000) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < finalNumber) {
      const timer = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [finalNumber, interval, counter]);

  return counter;
};

export default useCounter;