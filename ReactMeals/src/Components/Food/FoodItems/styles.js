import styled from 'styled-components'
import Button from '../../UI/Button'

export const FoodItemsContainer = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid var(--color-primary);
`

export const FoodInfo = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-size: 2rem;
  }
  p {
    font-style: italic;
    font-size: 1.4rem;
  }

  span {
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-primary);
  }

  @media (max-width: 1000px) {
    width: 50%;
  }
`

export const AddToCartContainer = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.6rem;
    font-weight: bold;

    input {
      width: 50%;
      padding: 0.5rem 1rem;

      border: 1px solid var(--color-secondary);
      border-radius: 1rem;

      outline: none;
      font-size: 1.6rem;
      transition: ease 300ms;

      :focus {
        box-shadow: 0 0 0.5rem var(--color-secondary);
      }
    }
  }

  ${Button} {
    background-color: var(--color-primary);
    margin: 1rem 0;
  }

  @media (max-width: 1000px) {
    width: 50%;
  }
`
