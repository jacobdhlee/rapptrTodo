import React from 'react';
import { Container, InputWrapper, ErrorMessage } from './styles';

const Input = ({
  name, 
  placeholder, 
  type, 
  value, 
  onChange, 
  label, 
  error,
  icon,
  max
}) => {
  return (
    <Container>
      <label>{label}</label>
      <InputWrapper className={error ? 'error' : ''}>
        <div>
          {icon}
        </div>
        <input 
          type={type} 
          name={name} 
          value={value}
          placeholder={placeholder}
          maxLength={max}
          onChange={onChange}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input;