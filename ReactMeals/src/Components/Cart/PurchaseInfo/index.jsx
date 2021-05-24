import React from 'react'
import formatPrice from '../../../utils/formatPrice'
import Button from '../../UI/Button'
import CartItem from '../CartItem'
import { PurchaseAmount } from './styles'

const PurchaseInfo = ({
  disposeModal,
  items,
  cartTotal,
  clickOrderHandler,
}) => {
  return (
    <React.Fragment>
      {items.length === 0 && (
        <strong>There is nothing in the cart, close and add one!</strong>
      )}
      {items.length > 0 &&
        items.map((item, index) => (
          <CartItem
            key={item.name}
            index={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      <PurchaseAmount>
        <strong>
          <span>Total amount</span>
          <span>R$ {formatPrice(cartTotal)}</span>
        </strong>
        <div>
          <Button onClick={disposeModal}>Close</Button>
          {items.length !== 0 && (
            <Button onClick={clickOrderHandler}>Order</Button>
          )}
        </div>
      </PurchaseAmount>
    </React.Fragment>
  )
}

export default PurchaseInfo
