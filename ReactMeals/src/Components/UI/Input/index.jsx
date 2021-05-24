import React from 'react'
import { LabelContainer } from './style'

const Input = ({ type, label, placeholder, ...rest }) => {
  return (
    <LabelContainer>
      <span>{label}</span>
      <input type={!type ? 'text' : type} placeholder={placeholder} {...rest} />
    </LabelContainer>
  )
}

export default Input
