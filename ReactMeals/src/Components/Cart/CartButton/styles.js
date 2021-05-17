import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  background-color: var(--color-primary);
  border-radius: 3rem;
  padding: 1.5rem 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-weight: bold;

  svg {
    font-size: 2.5rem;
  }

  > span {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`

export const CartButtonCount = styled.strong`
  height: 3.5rem;
  width: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  padding: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  background-color: var(--color-secondary);
`
