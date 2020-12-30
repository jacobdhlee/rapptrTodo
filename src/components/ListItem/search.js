import React from 'react';
import { Container, SearchWrapper, Button } from './styles';

const Search = ({
  icon, 
  value, 
  onChange, 
  onClick, 
  placeholder, 
  buttonText,
  type,
  disabled,
  max
}) => {
  return (
    <Container>
      <SearchWrapper className={type}>
        {icon && <div>{icon}</div>}
        <input 
          type={'text'} 
          value={value}
          placeholder={placeholder}
          maxLength={max}
          onChange={onChange}/>
      </SearchWrapper>
      <Button
        disabled={disabled && type === "add"}
        className={type}
        onClick={onClick}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default Search;