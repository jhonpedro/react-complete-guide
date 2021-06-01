import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const backdropClass = `Backdrop ${
    props.show ? 'BackdropShow' : 'BackdropHide'
  }`;
  return <div className={backdropClass}></div>;
};

export default backdrop;
