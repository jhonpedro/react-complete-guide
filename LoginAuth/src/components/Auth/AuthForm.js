import { useEffect, useRef, useState } from 'react';
import firebaseRequest from '../../services/firebaseRequest';
import { useAuth } from '../../store/auth';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [requestResult, setRequestResult] = useState({});
  const requestSingUp = firebaseRequest(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCb8jUUCUIIJHY_HMEuomEPDaPgrWSGNOs'
  );
  const requestSingIn = firebaseRequest(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCb8jUUCUIIJHY_HMEuomEPDaPgrWSGNOs'
  );
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  useEffect(() => {
    let timer;
    if (requestResult.message) {
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
      const response = await requestSingIn(
        JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        })
      );
      if (response.error && response.error.message) {
        setRequestResult({
          message: `Error: ${response.error.message}`,
          status: 'error',
        });
        return;
      }

      login(response.idToken);
      return;
    }

    const response = await requestSingUp(
      JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      })
    );
    if (response.error && response.error.message) {
      setRequestResult({
        message: `Error: ${response.error.message}`,
        status: 'error',
      });
      return;
    }
    setIsLogin(true);
    setRequestResult({
      message: `You've created your account`,
      status: 'success',
    });
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
