import React from 'react'
import ReactDOM from 'react-dom'
import { useStore } from '../../../store/context'
import CartItem from '../CartItem'
import Button from '../../UI/Button'
import { Backdrop, ModalBox, ModalContainer, PurchaseAmount } from './styles'
import formatPrice from '../../../utils/formatPrice'

const ModalElement = ({ disposeModal, items, total }) => (
  <ModalContainer>
    <Backdrop onClick={disposeModal} />
    <ModalBox>
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
          <span>R$ {formatPrice(total)}</span>
        </strong>
        <div>
          <Button onClick={disposeModal}>Close</Button>
          <Button>Order</Button>
        </div>
      </PurchaseAmount>
    </ModalBox>
  </ModalContainer>
)

const Modal = () => {
  const {
    getIsModalShowing: isShowing,
    handleClickIsModalShowing,
    getCartItems,
  } = useStore()

  const disposeModal = () => handleClickIsModalShowing()

  const cartItems = getCartItems()
  const cartTotal = cartItems.reduce(
    (acc, current) =>
      acc + parseInt(current.price) * parseInt(current.quantity),
    0
  )

  return isShowing()
    ? ReactDOM.createPortal(
        <ModalElement
          disposeModal={disposeModal}
          items={cartItems}
          total={cartTotal}
        />,
        document.getElementById('modal')
      )
    : null
}

export default Modal
