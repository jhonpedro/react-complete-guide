import React from 'react'
import Button from '../../UI/Button'
import { AddToCartContainer, FoodInfo, FoodItemsContainer } from './styles'

const FoodItems = ({ name, description, price }) => {
  return (
    <FoodItemsContainer>
      <FoodInfo>
        <strong>{name}</strong>
        <p>{description}</p>
        <span>{price}</span>
      </FoodInfo>
      <AddToCartContainer>
        <label>
          Amount
          <input type="number" />
        </label>
        <Button>+ Add</Button>
      </AddToCartContainer>
    </FoodItemsContainer>
  )
}

export default FoodItems
