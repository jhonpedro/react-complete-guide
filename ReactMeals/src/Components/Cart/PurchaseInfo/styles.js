import styled from 'styled-components'

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
