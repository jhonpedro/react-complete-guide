import React from 'react'
import formatPrice from '../../../utils/formatPrice'
import { AddToQuantity, CartItemContainer, CartItemInfo } from './styles'

const CartItem = ({ name, price, quantity }) => {
  const formatedPrice = formatPrice(price)

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
        <button>-</button>
        <button>+</button>
      </AddToQuantity>
    </CartItemContainer>
  )
}

export default CartItem
