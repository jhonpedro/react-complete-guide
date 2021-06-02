import React, { useState } from 'react';

const Greetings = () => {
  const [text, setText] = useState('');

  const changeText = () => {
    setText('Changed');
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <p>How are you?</p>

      <p>{!text && <p>We are seeing!</p>}</p>
      <button onClick={changeText}>Change text!</button>
    </div>
  );
};

export default Greetings;
