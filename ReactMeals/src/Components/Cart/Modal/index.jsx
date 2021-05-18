import React from 'react'
import ReactDOM from 'react-dom'
import { useStore } from '../../../store/context'
import CartItem from '../CartItem'
import { ModalBox, ModalContainer } from './styles'

const ModalElement = ({ disposeModal, items }) => (
  <ModalContainer onClick={disposeModal}>
    <ModalBox>
      {items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
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
