import React from 'react'
import CartButton from '../../Cart/CartButton'

import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">ReactMeals</a>
      <CartButton />
    </HeaderContainer>
  )
}

export default Header
