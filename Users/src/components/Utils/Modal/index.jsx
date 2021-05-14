import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../UI/Button';
import { ModalBox, ModalContainer } from './styles';

const ModalElement = ({ text, clickHandler }) => (
  <ModalContainer>
    <ModalBox>
      <p>{text}</p>
      <div>
        <Button onClick={clickHandler}>Ok</Button>
      </div>
    </ModalBox>
  </ModalContainer>
);

const Modal = ({ text, isUp, isUpHandler }) => {
  function clickHandler() {
    isUpHandler();
  }

  return !isUp
    ? null
    : ReactDOM.createPortal(
        <ModalElement text={text} clickHandler={clickHandler} />,
        document.getElementById('modal')
      );
};

export default Modal;
