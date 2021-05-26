import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  h2 {
    font-weight: 600;
    text-transform: uppercase;
    color: #75BA93;
  }
  span {
    background: #E4FCDB;
    border: 1px solid #B9EAA4;
    color: #999;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
  }
  h3 {
    font-weight: 500;
    color: #666;
    margin-bottom: 0;
    margin-top: 2rem;
  }
  p {
    color: #000;
    line-height: 10px;
  }
  .h3S {
    margin-top: .5rem;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  margin: .5rem 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,.12);
  h3, p {
    margin: 0;
  }
  h3 {
    font-size: 16px;
  }
  div {
    width: 1000px;
    margin: auto;
    /* padding: .5rem 0; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h3 {
      margin: .5rem 0;
    }
    p, a {
      margin-left: .5rem;
    }
  }
  a {
    color: #75BA93;
  }
`
export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`
export const StatusModify = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: #E4FCDB;
    border-radius: 5px;
    color: #666;
    height: fit-content;
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
  span {
    background: #75BA93;
    color: #fff;
  }
`