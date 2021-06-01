import React from 'react';

import './Modal.css';

const modal = (props) => {
  const modalClass = `Modal ${
    props.show === 'entering'
      ? 'ModalShow'
      : props.show === 'exiting'
      ? 'ModalHide'
      : null
  }`;
  return (
    <div className={modalClass}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
