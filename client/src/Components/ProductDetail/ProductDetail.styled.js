import styled, { css } from "styled-components";

export const Container = styled.div `

    /* margin: 2rem 20rem 2rem 20rem; */
    max-width: 1200px;
    margin: 2rem auto;
    /* height: 100vh; */
    /* border-bottom: 1px solid gray; */
    img {
        width: 100%;
    }
`;

export const ContainerFlex = styled.div `
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    
`;
export const BigImg = styled.img `
    height: 550px;
    object-fit: cover;

    ${props => props.small && css`
      height: 150px;
    `};
`;

export const ImagesSelector = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Selector = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    align-items: center;
    img {
        height: 5rem;
        width: 5rem;
        margin-right: 1em;
        /* margin-bottom: 1em; */
    }
`;

export const Informacion = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    /* min-width: 20%; */
    border: 1px solid #e4fcdb;
    box-shadow: 0 4px 8px 0 #e4fcdb;
    span{
        display:flex;
        justify-content:center;
        img{
        width:90%;
         }
    }
    h2 {
        font-size: 2rem;
    }
    p {
        margin: 0;
        font-size: 1em;
        line-height: 20px;
        margin-bottom: 10px;
        font-weight: 500;
        color: #666;
    }
    span {
        display: flex;
        justify-content: flex-start;
        font-weight: 600;
    }
    span p {
        margin-left: 10px;
    }
    button {
        height: 3rem;
        margin: 1rem 1rem;
        background: #e4fcdb;
        border: none;
        border-radius: 100px;
    }
    button:hover {
        border: 1px solid gray;
    }
`;

export const Imagen = styled.div`
    /* min-height: 100%; */
    min-width: 70%;
    height: 600px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ReviewModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(255,255,255, .6); */
  background: rgba(0,0,0, .1);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  
  &.active {
    display: inherit;
  }
`;