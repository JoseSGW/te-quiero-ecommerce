import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid gray;
    max-width: 1200px;
    margin: 2rem auto;
`;

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
        /* padding-top: 1rem; */
        display: inline;
    }
`;

export const EditionIcon = styled.image `
    padding-top: 0.1rem;
    justify-self: flex-end;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
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