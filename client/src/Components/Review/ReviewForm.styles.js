import styled from "styled-components";

export const Imagen = styled.div `
    display: flex;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
    height: 100%;
    img {
        border-radius: 100px;
        height: 4.5rem;
    }
`;
export const ContainerFlex = styled.div `
    display: flex;
    justify-content: center;
    padding:5%;
    button{
         padding 2%;
    }
         `;
export const Texto = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: start-flex;
    padding-left: 1rem;
    padding-right: 1rem;
    word-break: break-word;
    h2 {
        margin: 0;
        padding-top: 1%;
    }
`;

export const ContainerReviewForm = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: auto;
    margin-top:10%;
    width:30%;
    height:3%;
    background-color: #dbfcfa;
    padding-bottom:3%;
    
`;