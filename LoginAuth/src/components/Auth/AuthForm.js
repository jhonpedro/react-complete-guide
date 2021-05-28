import { useEffect, useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [requestResult, setRequestResult] = useState({});
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    let timer;
    if (!!requestResult.message) {
      timer = setTimeout(() => setRequestResult({}), 10000);
    }

    return () => clearTimeout(timer);
  }, [requestResult]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (isLogin) {
      console.log();
      return;
    }
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCb8jUUCUIIJHY_HMEuomEPDaPgrWSGNOs',
      {
        method: 'POST',
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setRequestResult({
        message: `Error: ${data.error.message}`,
        status: 'error',
      });
      return;
    }

    setIsLogin(true);
    setRequestResult({
      message: `You've created your account`,
      status: 'success',
    });
    return;
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        {requestResult.message && (
          <span
            className={`${classes.resultMessage} ${
              requestResult.status === 'success'
                ? classes.resultSuccessMessage
                : classes.resultErrorMessage
            }`}
          >
            {requestResult.message}
          </span>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
