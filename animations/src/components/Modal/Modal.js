import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
      {(state) => {
        const modalClass = `Modal ${
          state === 'entering'
            ? 'ModalShow'
            : state === 'exiting'
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
      }}
    </Transition>
  );
};

export default modal;
