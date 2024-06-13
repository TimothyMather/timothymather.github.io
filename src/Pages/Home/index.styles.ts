import { ImageListItem, Modal } from "@mui/material";
import styled from "styled-components";
import theme from "../../Theme/index";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    img {
        object-fit: contain;
        width: 100%;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    justify-self: center;
    height: 150px;
    width: 100%;
    position: relative;
    top: 30px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 80%;
    @media(max-width: 500px) {
        width: 100%;
        height: 100%;
    }
`;

export const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled(ImageListItem)`
    background-color: ${theme.palette.secondary.main};
`;
