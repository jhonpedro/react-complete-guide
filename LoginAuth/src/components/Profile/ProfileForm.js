import { useRef } from 'react';
import classes from './ProfileForm.module.css';
import firebaseRequest from '../../services/firebaseRequest';

const ProfileForm = ({ token, logout }) => {
  const newPasswordRef = useRef();
  const request = firebaseRequest(
    'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCb8jUUCUIIJHY_HMEuomEPDaPgrWSGNOs'
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    const newPasswordValue = newPasswordRef.current.value;

    await request(
      JSON.stringify({
        idToken: token,
        password: newPasswordValue,
        returnSecureToken: false,
      })
    );

    alert(`You'll have to login again now!`);
    logout();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
