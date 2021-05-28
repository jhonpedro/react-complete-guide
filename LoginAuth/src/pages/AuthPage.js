import { Redirect } from 'react-router';
import AuthForm from '../components/Auth/AuthForm';
import { useAuth } from '../store/auth';

const AuthPage = () => {
  const { getToken } = useAuth();

  if (getToken()) {
    return <Redirect to="/" />;
  }

  return <AuthForm />;
};

export default AuthPage;
