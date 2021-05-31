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
  return {
    meetups: initial_value,
  };
};

export default MyApp;
