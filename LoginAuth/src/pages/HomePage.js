import { Redirect } from 'react-router';
import StartingPageContent from '../components/StartingPage/StartingPageContent';
import { useAuth } from '../store/auth';

const HomePage = () => {
  const { getToken } = useAuth();

  if (!getToken()) {
    return <Redirect to="/auth" />;
  }

  return <StartingPageContent />;
};

export default HomePage;
