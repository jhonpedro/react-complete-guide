import { useState } from 'react';

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [inputNameWasTouched, setInputNameWasTouched] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [inputEmailWasTouched, setInputEmailWasTouched] = useState(false);

  const nameInputIsValid = nameInput.trim() !== '';
  const nameInputIsTouchedAndInValid = inputNameWasTouched && !nameInputIsValid;

  const emailInputIsValid = emailInput.includes('@');
  const emailInputIsTouchedAndInValid =
    inputEmailWasTouched && !emailInputIsValid;

  const formIsValid = nameInputIsValid && emailInputIsValid;

  const nameInputBlurHandler = () => {
    setInputNameWasTouched(true);
  };
  const emailInputBlurHandler = () => {
    setInputEmailWasTouched(true);
  };

  const onChangeNameInputHandler = (event) => {
    setNameInput(event.target.value);
  };
  const onChangeEmailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    setNameInput('');
    setInputNameWasTouched(false);
    setEmailInput('');
    setInputEmailWasTouched(false);
  };

  const formNameControlClasses = nameInputIsTouchedAndInValid
    ? 'form-control invalid'
    : 'form-control';
  const formEmailControlClasses = emailInputIsTouchedAndInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={formNameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          value={nameInput}
          onChange={onChangeNameInputHandler}
        />
        {nameInputIsTouchedAndInValid && (
          <p className="error-text">Name input must not be empty.</p>
        )}
      </div>
      <div className={formEmailControlClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          value={emailInput}
          onChange={onChangeEmailInputHandler}
        />
        {emailInputIsTouchedAndInValid && (
          <p className="error-text">E-mail must have an @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
