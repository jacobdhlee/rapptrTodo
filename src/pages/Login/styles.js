import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  h1 {
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  background-color: #42A5F5;
  margin-bottom: 10px;
;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :disabled {
    background-color: #9E9E9E;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.span`
  font-size: 16px;
  color: #FF1744;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: -15px 0 20px 0;
  >input {
    margin-right: 10px;
  }
`