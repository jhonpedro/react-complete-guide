import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowShow, setAllowShow] = useState(false);
  const [input, setInput] = useState('');

  console.log('APP RUNNED');

  const handleClickAllowShow = useCallback(() => {
    setAllowShow((prevState) => !prevState);
  }, []);

  const handleClickShowParagraph = useCallback(() => {
    if (allowShow) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowShow]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleClickShowParagraph}>Toogle show paragraph</Button>
      <Button onClick={handleClickAllowShow}>Allow show paragraph</Button>
    </div>
  );
}

export default App;
