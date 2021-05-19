import React from 'react'
import ReactDOM from 'react-dom'
import { useStore } from '../../../store/context'
import CartItem from '../CartItem'
import Button from '../../UI/Button'
import { ModalBox, ModalContainer, PurchaseAmount } from './styles'

const ModalElement = ({ disposeModal, items }) => (
  <ModalContainer>
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
          <span>0</span>
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

  return isShowing()
    ? ReactDOM.createPortal(
        <ModalElement disposeModal={disposeModal} items={getCartItems()} />,
        document.getElementById('modal')
      )
    : null
}

export default Modal
