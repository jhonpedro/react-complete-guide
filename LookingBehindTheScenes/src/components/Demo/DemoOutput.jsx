import React from 'react';

const DemoOutput = ({ show }) => {
  console.log('DEMO RUNNED');
  return <p>{show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);
