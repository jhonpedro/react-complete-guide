import React from 'react';
import useInput from '../hooks/userInput';

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    hasErrors: firstNameWasTouchedAndIsInvalid,
    inputBlurHandler: firstNameBlurHandler,
    onChangeValueHandler: firstNameOnChangeHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length >= 3);
  const {
    value: secondNameInput,
    hasErrors: secondNameWasTouchedAndIsInvalid,
    inputBlurHandler: secondNameBlurHandler,
    onChangeValueHandler: secondNameOnChangeHandler,
    reset: resetSecondName,
  } = useInput((value) => value.trim().length >= 3);
  const {
    value: emailInput,
    isValid: emailIsValid,
    hasErrors: emailWasTouchedAndIsInvalid,
    inputBlurHandler: emailBlurHandler,
    onChangeValueHandler: emailOnChangeHandler,
    reset: resetEmail,
    wasTouched: emailInputWasTouched,
  } = useInput((value) => value.includes('@'));

  const formIsValid =
    !firstNameWasTouchedAndIsInvalid &&
    !secondNameWasTouchedAndIsInvalid &&
    !emailWasTouchedAndIsInvalid;

  const submitHandler = (event) => {
    event.preventDefault();
    resetFirstName();
    resetSecondName();
    resetEmail();
  };

  const firstNameClass = firstNameWasTouchedAndIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const secondNameClass = secondNameWasTouchedAndIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailClass = emailWasTouchedAndIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameInput}
            onBlur={firstNameBlurHandler}
            onChange={firstNameOnChangeHandler}
          />
          {firstNameWasTouchedAndIsInvalid && (
            <p className="error-text">
              First name must have at least three letters
            </p>
          )}
        </div>
        <div className={secondNameClass}>
          <label htmlFor="secondName">Last Name</label>
          <input
            type="text"
            id="secondName"
            value={secondNameInput}
            onBlur={secondNameBlurHandler}
            onChange={secondNameOnChangeHandler}
          />
          {secondNameWasTouchedAndIsInvalid && (
            <p className="error-text">
              Second name must have at least three letters
            </p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailInput}
          onBlur={emailBlurHandler}
          onChange={emailOnChangeHandler}
        />
        {!emailIsValid && emailInputWasTouched && (
          <p className="error-text">Name must have at least three letters</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
