import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import { CartButtonContainer, CartButtonCount } from './styles'

const CartButton = () => {
  return (
    <CartButtonContainer>
      <FiShoppingCart />
      <span>Your Cart</span>
      <CartButtonCount>0</CartButtonCount>
    </CartButtonContainer>
  )
}

export default CartButton
