import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  > h1 {
    margin-top: 50px;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  position: absolute;
  top:30px;
  right: 20%;
  width: 150px;
  height: 30px;
  @media only screen and (max-width: 1000px) {
    top: 5px;
    right: 20px;
  }
  @media only screen and (max-width: 500px) {
    top: 5px;
    right: 5px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: 10px;
  padding-top: 10px;
  border: 1px solid black;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  @media only screen and (max-width: 500px) {
    height: 500px;
  }
`;


export const EmptyText = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;