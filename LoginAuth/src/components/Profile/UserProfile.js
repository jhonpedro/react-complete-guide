import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = ({ token, logout }) => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm token={token} logout={logout} />
    </section>
  );
};

export default UserProfile;
