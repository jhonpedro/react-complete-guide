import styled from 'styled-components'
import Button from '../../UI/Button'

export const OrderingContainer = styled.div``

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    span {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
    strong {
      margin-left: 1rem;
      color: var(--color-primary);
      font-size: 2.5rem;
    }
  }

  ${Button} {
    background-color: var(--color-primary);
  }
`
