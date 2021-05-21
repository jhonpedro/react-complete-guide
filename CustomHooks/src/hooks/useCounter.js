import { useCallback, useEffect, useState } from 'react';

const useCounter = (operation) => {
  const [counter, setCounter] = useState(0);

  const getOperationResult = useCallback(
    (n1, n2) => {
      switch (operation) {
        case '+':
          return n1 + n2;
        case '-':
          return n1 - n2;
        default:
          throw new Error('Should provide an operation in useCounter');
      }
    },
    [operation]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => getOperationResult(prevCounter, 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [getOperationResult]);

  return counter;
};

export default useCounter;
