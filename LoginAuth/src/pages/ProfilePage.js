import { Redirect } from 'react-router-dom';
import UserProfile from '../components/Profile/UserProfile';
import { useAuth } from '../store/auth';

const ProfilePage = () => {
  const { getToken, logout } = useAuth();
  const token = getToken();

  if (!token) {
    return <Redirect to="/auth" />;
  }

  return <UserProfile token={token} logout={logout} />;
};

export default ProfilePage;
