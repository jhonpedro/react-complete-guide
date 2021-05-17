import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const INITIAL_STATE = {
  value: '',
  isValid: true,
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT': {
      return { value: action.payload, isValid: action.payload.includes('@') };
    }
    case 'INPUT_BLUR': {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    default:
      return INITIAL_STATE;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT': {
      return {
        value: action.payload.trim(),
        isValid: action.payload.trim().length > 6,
      };
    }
    case 'INPUT_BLUR': {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    default:
      return INITIAL_STATE;
  }
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, INITIAL_STATE);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    INITIAL_STATE
  );
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const indentifier = setTimeout(() => {
      console.log('Check validity');
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      console.log('Cleanup');
      clearTimeout(indentifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
