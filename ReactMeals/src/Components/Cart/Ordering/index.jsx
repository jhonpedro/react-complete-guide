import React from 'react'
import useInput from '../../../hooks/useInput'
import formatPrice from '../../../utils/formatPrice'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import useHTTPRequest from '../../../hooks/useHTTPRequest'
import { useStore } from '../../../store/context'
import { ActionsContainer, OrderingContainer } from './styles'

const Ordering = ({ cartTotal, items, disposeModal }) => {
  const { resetCart } = useStore()
  const [, , request] = useHTTPRequest(
    'https://test-f860d-default-rtdb.firebaseio.com/orders.json',
    'POST',
    { 'Content-Type': 'application/json' }
  )
  const [
    name,
    wasNameTouched,
    onBlurName,
    handleChangeName,
    isNameValid,
    resetName,
  ] = useInput((value) => value.trim().length > 3)
  const [
    email,
    wasEmailTouched,
    onBlurEmail,
    handleChangeEmail,
    isEmailValid,
    resetEmail,
  ] = useInput((value) => value.includes('@'))
  const [
    address,
    wasAddressTouched,
    onBlurAddress,
    handleChangeAddress,
    isAddressValid,
    resetAddress,
  ] = useInput((value) => value.trim().length > 5)

  const submitHandler = async (event) => {
    event.preventDefault()

    if (!isNameValid && !isEmailValid && !isAddressValid) {
      return
    }
    const reqBody = { name, address, email, items }

    const success = await request(JSON.stringify(reqBody))

    resetName()
    resetEmail()
    resetAddress()
    resetCart()
    disposeModal()
    if (!!success) {
      alert('Pedido efetuado com sucesso')
    } else {
      alert('Houve um erro no pedido')
    }
  }

  return (
    <OrderingContainer>
      <form onSubmit={submitHandler}>
        <Input
          label="Name"
          placeholder="Type your name"
          onBlur={onBlurName}
          value={name}
          isValid={
            wasNameTouched && isNameValid()
              ? true
              : wasNameTouched
              ? false
              : true
          }
          onChange={handleChangeName}
          notValidMessage="Your name should have at least three letters"
        />
        <Input
          label="Email"
          type="email"
          placeholder="Type your E-mail"
          onBlur={onBlurEmail}
          value={email}
          isValid={
            wasEmailTouched && isEmailValid()
              ? true
              : wasEmailTouched
              ? false
              : true
          }
          onChange={handleChangeEmail}
          notValidMessage="Type a correct e-mail"
        />
        <Input
          label="Address"
          placeholder="Type your address"
          onBlur={onBlurAddress}
          value={address}
          isValid={
            wasAddressTouched && isAddressValid()
              ? true
              : wasAddressTouched
              ? false
              : true
          }
          onChange={handleChangeAddress}
          notValidMessage="Describe better your address"
        />
        <ActionsContainer>
          <div>
            <span>
              Cart total: <strong>{formatPrice(cartTotal)}</strong>
            </span>
          </div>
          <Button type="submit">Confirm order</Button>
        </ActionsContainer>
      </form>
    </OrderingContainer>
  )
}

export default Ordering
