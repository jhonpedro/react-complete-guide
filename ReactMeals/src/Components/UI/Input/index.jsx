import React from 'react'
import { LabelContainer } from './style'

const Input = ({
  type,
  label,
  placeholder,
  isValid,
  notValidMessage,
  ...rest
}) => {
  return (
    <LabelContainer isInvalid={!isValid}>
      <span>{label}</span>
      <input type={!type ? 'text' : type} placeholder={placeholder} {...rest} />
      {!isValid && <p>{notValidMessage}</p>}
    </LabelContainer>
  )
}

export default Input
