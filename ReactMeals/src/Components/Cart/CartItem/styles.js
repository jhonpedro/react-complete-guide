import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;
  border-bottom: 2px solid var(--color-primary);
`

export const CartItemInfo = styled.div`
  width: 50%;
  font-size: 1.6rem;

  strong {
    font-size: 2rem;
    display: block;
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-weight: bold;
    }

    span:first-child {
      font-weight: bold;
      color: var(--color-primary);
      margin-right: 30%;
    }

    span:last-child {
      height: 3.5rem;
      width: 3.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`

export const AddToQuantity = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: block;
    padding: 0 1rem;
    font-size: 2rem;
    width: 20%;
    border-radius: 2rem;
    background: transparent;
    border: 1px solid var(--color-primary);
    cursor: pointer;
  }

  button:last-child {
    margin-left: 2rem;
  }
`
