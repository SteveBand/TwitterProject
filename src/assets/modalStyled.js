import styled from "styled-components";

export const ModalBg = styled.div`
    background-color: rgba(91, 112, 131, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalBox = styled.div`
    background-color: black;
    display: flex;
    min-height: 350px;
    max-height: 550px;
    width: 600px;
    border-radius: 20px;
`

export const ModalContainer = styled.section`
    width: 90%;
    height: 90%;
    padding: 30px 0 0 0;
`