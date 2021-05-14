import React from 'react';
import Button from '../../UI/Button';
import { ModalBox, ModalContainer } from './styles';

const Modal = ({ text, isUp, isUpHandler }) => {
  function clickHandler() {
    isUpHandler();
  }

  return !isUp ? null : (
    <ModalContainer>
      <ModalBox>
        <p>{text}</p>
        <div>
          <Button onClick={clickHandler}>Ok</Button>
        </div>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
