import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import MeetupProvider from '../store/meetups';
import initial_value from '../store/initial-value';

function MyApp({ Component, pageProps, meetups }) {
  return (
    <Layout>
      <MeetupProvider meetups={meetups}>
        <Component {...pageProps} />
      </MeetupProvider>
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/');
  const dataJSON = await response.json();

  return {
    meetups: dataJSON.data,
  };
};

export default MyApp;
