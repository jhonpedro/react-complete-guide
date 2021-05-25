import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
