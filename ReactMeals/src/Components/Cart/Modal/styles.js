import styled, { keyframes } from 'styled-components'
import Card from '../../Card'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;

  top: 0;
  left: 0;
  z-index: 10;

  animation: ease 500ms ${fadeIn};
  background-color: rgba(0, 0, 0, 0.4);

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
  > strong {
    color: var(--color-primary);
    display: block;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0;
  }
`

export const PurchaseAmount = styled.div`
  > strong {
    display: flex;
    justify-content: space-between;
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    font-size: 1.7rem;

    button:first-child {
      background: transparent;
      border: 2px solid var(--color-primary);
    }
    button:last-child {
      margin-left: 2rem;
      background-color: var(--color-primary);
    }
  }
`
