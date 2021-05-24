import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useStore } from '../../../store/context'
import { Backdrop, ModalBox, ModalContainer } from './styles'
import PurchaseInfo from '../PurchaseInfo'
import Ordering from '../Ordering'

const ModalElement = ({
  disposeModal,
  items,
  total,
  isOrdering,
  clickOrderHandler,
}) => (
  <ModalContainer>
    <Backdrop onClick={disposeModal} />
    <ModalBox>
      {isOrdering ? (
        <Ordering cartTotal={total} items={items} disposeModal={disposeModal} />
      ) : (
        <PurchaseInfo
          disposeModal={disposeModal}
          items={items}
          cartTotal={total}
          clickOrderHandler={clickOrderHandler}
        />
      )}
    </ModalBox>
  </ModalContainer>
)

const Modal = () => {
  const {
    getIsModalShowing: isShowing,
    handleClickIsModalShowing,
    getCartItems,
  } = useStore()
  const [isOrdering, setIsOrdering] = useState(false)

  const clickOrderHandler = () => setIsOrdering((prevState) => !prevState)
  const disposeModal = () => handleClickIsModalShowing()

  const cartItems = getCartItems()
  const cartTotal = cartItems.reduce(
    (acc, current) =>
      acc + parseFloat(current.price) * parseFloat(current.quantity),
    0
  )

  return isShowing()
    ? ReactDOM.createPortal(
        <ModalElement
          disposeModal={disposeModal}
          items={cartItems}
          total={cartTotal}
          isOrdering={isOrdering}
          clickOrderHandler={clickOrderHandler}
        />,
        document.getElementById('modal')
      )
    : null
}

export default Modal
