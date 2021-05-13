import React, { useState } from 'react';

import NewUser from './components/User/NewUser';
import GlobalStyle from './assets/global';
import ListUser from './components/User/ListUser';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'João',
      age: '20',
      id: Math.random(),
    },
  ]);

  function addUser(user) {
    setUsers((prevState) => [user, ...prevState]);
  }

  return (
    <>
      <NewUser onAddUser={addUser} />
      <ListUser users={users} />
      <GlobalStyle />
    </>
  );
}

export default App;
