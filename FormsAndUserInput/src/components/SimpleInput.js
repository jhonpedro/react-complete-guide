import { useState } from 'react';
import useInput from '../hooks/userInput';

const SimpleInput = (props) => {
  const {
    value: nameInput,
    isValid: nameInputIsValid,
    onChangeValueHandler: onChangeNameInputHandler,
    hasErrors: nameInputIsTouchedAndIsInvalid,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetInputName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailInput,
    isValid: emailInputIsValid,
    onChangeValueHandler: onChangeEmailInputHandler,
    hasErrors: emailInputIsTouchedAndIsInvalid,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetInputEmail,
  } = useInput((value) => value.includes('@'));

  const formIsValid = nameInputIsValid && emailInputIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid) {
      return;
    }
    resetInputName();
    resetInputEmail();
  };

  const formNameControlClasses = nameInputIsTouchedAndIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const formEmailControlClasses = emailInputIsTouchedAndIsInvalid
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
        {nameInputIsTouchedAndIsInvalid && (
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
        {emailInputIsTouchedAndIsInvalid && (
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
