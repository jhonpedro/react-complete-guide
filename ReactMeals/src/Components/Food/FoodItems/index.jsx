import React from 'react'
import Button from '../../UI/Button'
import { AddToCartContainer, FoodInfo, FoodItemsContainer } from './styles'

const FoodItems = ({ name, description, price }) => {
  const formatedPrice = price
    .toString()
    .replace(/(\d+)(.\d+)?/, (_, n1, n2) => {
      return `${n1},${!n2 ? '00' : n2}`
    })

  return (
    <FoodItemsContainer>
      <FoodInfo>
        <strong>{name}</strong>
        <p>{description}</p>
        <span>R${formatedPrice}</span>
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
