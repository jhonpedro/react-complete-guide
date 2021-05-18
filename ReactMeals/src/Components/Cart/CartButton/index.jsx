import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useStore } from '../../../store/context'

import { CartButtonContainer, CartButtonCount } from './styles'

const CartButton = () => {
  const { handleClickIsModalShowing, getCartItems } = useStore()
  const [bumb, setBumb] = useState(false)
  const cartItemsLength = getCartItems().length

  useEffect(() => {
    return () => {
      setBumb(true)
      setTimeout(() => setBumb(false), 500)
    }
  }, [cartItemsLength])

  const showModal = () => {
    handleClickIsModalShowing()
  }

  return (
    <CartButtonContainer onClick={showModal}>
      <FiShoppingCart />
      <span>Your Cart</span>
      <CartButtonCount bump={bumb}>
        <span>{cartItemsLength}</span>
      </CartButtonCount>
    </CartButtonContainer>
  )
}

export default CartButton
