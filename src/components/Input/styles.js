import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  margin-bottom: 20px;
  >label {
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #BDBDBD;
  height: 50px;
  margin-bottom: 5px;
  border-radius: 8px;
  &.error {
    border: 1px solid #FF1744;
  }
  > div {
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  > input {
    border: none;
    font-size: 17px;
    width: calc(100% - 50px);
    :focus {
      outline: none;
    }
  }
`
export const ErrorMessage = styled.span`
  font-size: 15px;
  color: #FF1744;
`;