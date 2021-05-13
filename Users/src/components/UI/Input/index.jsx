import React from 'react';
import { InputContainer } from './styles';

const Input = ({ label, placeholder, type, ...rest }) => {
  return (
    <InputContainer>
      <label>
        {label}
        <input
          type={!type ? 'text' : type}
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </InputContainer>
  );
};

export default Input;
