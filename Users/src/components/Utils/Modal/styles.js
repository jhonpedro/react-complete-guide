import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  padding: 3rem;
  background-color: var(--color-white);
  border-radius: 2rem;
  min-width: 60%;
  color: var(--color-primary);

  display: flex;
  flex-direction: column;

  p {
    padding: 2rem 0;
  }

  > div {
    display: flex;
    justify-content: flex-end;
  }
`;
