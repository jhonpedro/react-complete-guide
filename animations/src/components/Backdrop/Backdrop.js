import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const backdropClass = `Backdrop ${
    props.show === 'entering'
      ? 'BackdropShow'
      : props.show === 'exiting'
      ? 'BackdropHide'
      : null
  }`;

  return <div className={backdropClass}></div>;
};

export default backdrop;
