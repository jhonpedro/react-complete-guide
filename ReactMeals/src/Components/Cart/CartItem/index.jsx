import React from 'react'
import { useStore } from '../../../store/context'
import formatPrice from '../../../utils/formatPrice'
import { AddToQuantity, CartItemContainer, CartItemInfo } from './styles'

const CartItem = ({ name, price, quantity, index }) => {
  const { editCartItemQuantity } = useStore()
  const formatedPrice = formatPrice(price)

  const handleSubtractionItem = () => {
    editCartItemQuantity(index, 'sub')
  }

  const handleSumItem = () => {
    editCartItemQuantity(index, 'sum')
  }

  return (
    <CartItemContainer>
      <CartItemInfo>
        <strong>{name}</strong>
        <div>
          <span>{formatedPrice}</span>
          <span>x {quantity}</span>
        </div>
      </CartItemInfo>
      <AddToQuantity>
        <button onClick={handleSubtractionItem}>-</button>
        <button onClick={handleSumItem}>+</button>
      </AddToQuantity>
    </CartItemContainer>
  )
}

export default CartItem
