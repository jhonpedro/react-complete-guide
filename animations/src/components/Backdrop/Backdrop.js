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
  console.log(props.show);

  return <div className={backdropClass}></div>;
};

export default backdrop;
