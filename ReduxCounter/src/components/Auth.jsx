import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/authSlice';

import classes from './Auth.module.css';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [errors]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      setErrors('Verify your credentials');
      return;
    }

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          {errors && <p>{errors}</p>}
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
