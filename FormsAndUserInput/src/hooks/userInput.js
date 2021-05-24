import { useState } from 'react';

const useInput = (validation) => {
  const [value, setValue] = useState('');
  const [wasTouched, setWasTouched] = useState(false);

  const isValid = validation(value);
  const hasErrors = !isValid && wasTouched;

  const onChangeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setValue('');
    setWasTouched(false);
  };

  return {
    value,
    wasTouched,
    isValid,
    hasErrors,
    onChangeValueHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
