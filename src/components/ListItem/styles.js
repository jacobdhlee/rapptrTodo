import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const SearchWrapper = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 15px;
  border-radius: 10px;
  >div {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  > input {
    width: 80%;
    height: 90%;
    outline: none;
    border: none;
  }
  &.add {
    justify-content: flex-start;
    > input {
      margin-left: 10px;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 55%;
    border-radius: 3px;
    > div {
      justify-content: center;
      margin-right: 5px;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #90CAF9;
  color: #FFFFFF;
  &.add {
    background-color: #80CBC4;
  }
  :disabled {
    cursor: not-allowed;
    background-color: #9E9E9E;
  }
`;

export const ItemContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  > input {
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 1px solid black;
    font-size: 17px;
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #FFFFFF;
  border: 0;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80CBC4;
  color: #FFFFFF;
  cursor: pointer;
  margin-right: 10px;
`

export const CloseBtn = styled.button`
  background-color: #FFFFFF;
  border: 0;
  cursor: pointer;
`