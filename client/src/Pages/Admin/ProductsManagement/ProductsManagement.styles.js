import styled, { css } from "styled-components";

export const Container = styled.section `
  position: relative;
  max-width: 1200px;
  margin: 3rem auto 5rem;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-weight: 600;
    /* color: #75BA93; */
    text-transform: uppercase;
  }
`
export const TopContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  form {
    margin-right: 2rem;
    input {
      border-bottom: 1px solid #B9EAA4;
      border-top: 1px solid #B9EAA4;
      border-left: 1px solid #B9EAA4;
      border-right: none;
      padding: .6rem;
      border-radius: 5px 0 0 5px;
      outline: none;
    }
    button {
      background: #E4FCDB;
      border-radius: 0 5px 5px 0;
      color: #666;
      width: fit-content;
      border: none;
      text-transform: uppercase;
      padding: .6rem;
      outline: none;
      border-bottom: 1px solid #B9EAA4;
      border-top: 1px solid #B9EAA4;
      border-right: 1px solid #B9EAA4;
      border-left: none;
      box-shadow: none;
    }
    button:hover {
      background: #75BA93;
      color: #fff;
      border-bottom: 1px solid #75BA93;
      border-top: 1px solid #75BA93;
      border-right: 1px solid #75BA93;
      border-left: none;
    }
  }
  button {
    background: #E4FCDB;
    border-radius: 5px;
    color: #666;
    width: fit-content;
    border: none;
    text-transform: uppercase;
    padding: .6rem;
    outline: none;
    box-shadow: 2px 2px 1px rgba(185, 234, 164, 1);
  }
  button:hover {
    background: #75BA93;
    color: #fff;
    box-shadow: none;
  }
`
export const DivSearch = styled.div `
  display: flex;
  align-items: center;
  select {
    margin-left: 10px;
    height: fit-content;
    border-bottom: 1px solid #75BA93;
    border-top: 1px solid #75BA93;
    border-left: 1px solid #75BA93;
    border-right: 1px solid #75BA93;
    padding: .3rem;
    border-radius: 3px;
    outline: none;
    background: #fff;
  }
`

export const Products = styled.div `
  display: flex;
  flex-direction: column;
  h1 {
    min-height: 30vh;
    font-weight: 500;
    color: #75BA93;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr 1fr repeat(3, .6fr);
  align-items: center;
  h3 {
    font-weight: 500;
  }

  ${props => props.orders && css`
    grid-template-columns: 1fr 3fr 1.5fr 1.5fr 1.5fr 1fr .3fr repeat(1, .63fr);
  `};
  ${props => props.users && css`
    grid-template-columns: 1fr 1fr .5fr 2fr 1fr repeat(1, 1fr) 1.1fr .55fr;
  `};
`
export const Product = styled.div `
  padding: 5px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr 1fr repeat(3, .6fr);
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  /* border-radius: 5px; */
  border-top: 1px solid #E4FCDB;
  border-bottom: 1px solid #E4FCDB;

  ${props => props.orders && css`
    grid-template-columns: 1fr 3fr 1.5fr 1.5fr 1.5fr repeat(1, .63fr) .3fr 1fr;
  `};
  ${props => props.users && css`
    grid-template-columns: 1fr 1fr .5fr 2fr 1fr repeat(1, 1fr) 1.1fr .55fr;
  `};

  &:hover {
    border-top: 1px solid rgba(185, 234, 164, 1);
    border-bottom: 1px solid rgba(185, 234, 164, 1);
  }
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
  p {
    margin: 0;
    font-weight: 400;
    color: #666;
  }
  span {
    width: 90%;
    margin: 0;
    font-weight: 400;
    color: #666;
  }
  button {
    background: #E4FCDB;
    border-radius: 5px;
    color: #666;
    width: fit-content;
    border: none;
    text-transform: uppercase;
    padding: .6rem;
    outline: none;
    box-shadow: 2px 2px 1px rgba(185, 234, 164, 1);
  }
  button:hover {
    background: #75BA93;
    color: #fff;
    box-shadow: none;
  }
`

export const DeleteModal = styled.div `
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
    display: flex;
  }
  `

export const Modal = styled.div`
  position: relative;

  max-width: 300px;
  border: 2px solid #E4FCDB;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  padding: 2.5rem 1rem;
  img {
    width: 70px;
    opacity: .7;
  }
  h3 {
    font-weight: 400;
    color: #666;
    margin: 30px 0;
  }
  button {
    margin: 0 .5rem;
    padding: .5rem .8rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    background: #FF4C4C;
    color: #fff;
    box-shadow: 1px 1px 1px rgba(255, 0, 0, .2);
  }
  button:last-child {
    background: #E4FCDB;
    color: #666;
    box-shadow: 2px 2px 1px rgba(185, 234, 164, 1);
  }
  button:last-child:hover {
    background: #75BA93;
    color: #fff;
    box-shadow: none;
  }
  button:hover {
    background: red;
    box-shadow: none;
  }
  ${props => props.password && css`
    h3 {
      font-weight: 600;
      margin: 0 0 2rem 0;
    }
  `};

  ${props => props.mpModal && css`
    h3 {
      font-weight: 600;
    }
    button {
      position: absolute;
      z-index: 5;
      top: 0;
      right: 0;
      background: transparent !important;
      box-shadow: none !important;
    }
    button:last-child:hover {
      color: #000;
    }
  `};

  ${props => props.status && css`
    max-width: 500px;
    padding: 2.5rem 2.5rem;
    button {
      background: #E4FCDB;
      color: #666;
      box-shadow: 2px 2px 1px rgba(185, 234, 164, 1);
    }
    button:hover {
      background: #75BA93;
      color: #fff;
      box-shadow: none;
    }
    p {
      font-style: italic;
      font-size: 14px;
      font-weight: 400;
      color: #666 !important;
      margin: 2rem 0 1.3rem;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h3 {
        margin: 0;
        margin-right: 10px;
        font-weight: 500;
      }
    }
  `};
`
export const StatusSelectors = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: #75BA93;
    font-weight: 700;
    text-transform: uppercase;
  }
  select {
    margin-left: 10px;
    height: fit-content;
    border-bottom: 1px solid #75BA93;
    border-top: 1px solid #75BA93;
    border-left: 1px solid #75BA93;
    border-right: 1px solid #75BA93;
    padding: .3rem;
    border-radius: 5px;
    outline: none;
    background: #fff;
  }
  ${props => props.userRol && css`
    margin-bottom: 2rem;
  `}
`