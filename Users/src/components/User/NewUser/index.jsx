import React, { useState } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import RoundedBox from '../../UI/RoundedBox';

import { NewUserContainer } from './styles';

const NewUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);

  function submitHandler(event) {
    event.preventDefault();

    console.log(name, age);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  return (
    <RoundedBox width="40%" margin="5rem auto">
      <NewUserContainer>
        <form onSubmit={submitHandler}>
          <Input
            label="Nome"
            placeholder="Seu nome"
            value={name}
            onChange={nameChangeHandler}
          />
          <Input
            label="Idade"
            placeholder="Sua idade"
            type="number"
            min="1"
            max="130"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </NewUserContainer>
    </RoundedBox>
  );
};

export default NewUser;
