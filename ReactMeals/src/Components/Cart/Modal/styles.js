import styled, { keyframes } from 'styled-components'
import Card from '../../Card'

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;

  top: 0;
  left: 0;
  z-index: 10;

  animation: ease 500ms ${fadeIn};
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled(Card)`
  position: relative;
  z-index: 11;
  width: 60%;
  padding: 2rem 1rem;
  background-color: var(--color-white);
`
