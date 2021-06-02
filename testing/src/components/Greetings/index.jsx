import React, { useState } from 'react';
import Output from '../Output';

const Greetings = () => {
  const [text, setText] = useState('');

  const changeText = () => {
    setText('Changed');
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <p>How are you?</p>

      {!text && <Output>We are seeing!</Output>}
      {text && <Output>Now we are seeing another thing!</Output>}
      <button onClick={changeText}>Change text!</button>
    </div>
  );
};

export default Greetings;
