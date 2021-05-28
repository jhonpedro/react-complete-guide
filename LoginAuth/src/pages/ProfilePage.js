import { Redirect } from 'react-router-dom';
import UserProfile from '../components/Profile/UserProfile';
import { useAuth } from '../store/auth';

const ProfilePage = () => {
  const { getToken } = useAuth();

  if (!getToken()) {
    return <Redirect to="/auth" />;
  }

  return <UserProfile />;
};

export default ProfilePage;
