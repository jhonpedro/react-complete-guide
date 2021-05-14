import React, { useState } from 'react';

import NewUser from './components/User/NewUser';
import GlobalStyle from './assets/global';
import ListUser from './components/User/ListUser';
import Modal from './components/Utils/Modal';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'João',
      age: '20',
      id: Math.random(),
    },
  ]);
  const [modal, setModal] = useState({
    text: '',
    isUp: false,
  });

  function addUser(user) {
    setUsers((prevState) => [user, ...prevState]);
  }

  function isUpHandler(text) {
    setModal((prevState) => {
      return { text, isUp: !prevState.isUp };
    });
  }

  return (
    <>
      <NewUser onAddUser={addUser} isUpHandler={isUpHandler} />
      <ListUser users={users} />
      <Modal text={modal.text} isUp={modal.isUp} isUpHandler={isUpHandler} />
      <GlobalStyle />
    </>
  );
}

export default App;
