import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: 25%;

    img {
        object-fit: contain;
        width: 100%;
    }
`;

export const SearchRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
    position: relative;
    top: 30px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 400;
  border: '2px solid #000';
  box-shadow: 24;
  padding: 4;
`