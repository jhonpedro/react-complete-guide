import React, { useState } from 'react'
import { useStore } from '../../../store/context'
import formatPrice from '../../../utils/formatPrice'
import Button from '../../UI/Button'
import { AddToCartContainer, FoodInfo, FoodItemsContainer } from './styles'

const FoodItems = ({ name, description, price }) => {
  const { addCartItem } = useStore()
  const [quantity, setQuantity] = useState(1)

  const addItemToCart = () => {
    const itemObj = {
      name,
      price,
      quantity,
    }

    addCartItem(itemObj)
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const formatedPrice = formatPrice(price)

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
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </label>
        <Button onClick={addItemToCart}>+ Add</Button>
      </AddToCartContainer>
    </FoodItemsContainer>
  )
}

export default FoodItems
