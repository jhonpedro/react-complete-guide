import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import MeetupProvider from '../store/meetups';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MeetupProvider>
        <Component {...pageProps} />
      </MeetupProvider>
    </Layout>
  );
}

export default MyApp;
