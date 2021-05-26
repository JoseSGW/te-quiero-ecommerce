import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  h1 {
    min-height: 30vh;
    font-weight: 500;
    color: #75BA93;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    color: #75BA93;
    /* color: #666; */
    text-transform: uppercase;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  label {
    margin-bottom: .5rem;
    margin-right: 1rem;
    color: #75BA93;
    font-weight: 600;
  }
  input, textarea, select {
    margin-bottom: 1.5rem;
    padding: 5px 10px;
    border-radius: 5px;
    border-top: 1px solid rgba(0,0,0,.15);
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
    border-left: 1px solid rgba(0,0,0,.15);
    /* outline: none; */
  }
  input:hover, textarea:hover, select:hover {
    border-top: 1px solid rgba(0,0,0,.5);
    border-right: 1px solid rgba(0,0,0,.5);
    border-bottom: 1px solid rgba(0,0,0,.5);
    border-left: 1px solid rgba(0,0,0,.5);
  }
  button {
    background: #E4FCDB;
    border-radius: 5px;
    color: #666;
    /* width: fit-content; */
    border: none;
    margin-bottom: 1rem;
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

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  box-shadow: 0px 0px 10px rgba(0,0,0,.12);
  padding: 1rem;
  border-radius: 7px;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0,0,0,.12);
  padding: 1rem;
  border-radius: 7px;
  /* border: 1px solid blue; */
  button:last-child {
    background: #75BA93;
    color: #fff;
    box-shadow: none;
  }
`
export const SelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 5px;
  padding: .5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 0px 10px rgba(0,0,0,.12);
  label, input {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: 400;
  }
  label:hover {
    text-decoration: underline;
  }
  div {
    /* display: flex;
    flex-direction: column; */
  }
  select {
    height: fit-content;
    border-bottom: 1px solid #75BA93;
    border-top: 1px solid #75BA93;
    border-left: 1px solid #75BA93;
    border-right: 1px solid #75BA93;
    padding: .3rem;
    border-radius: 3px;
    outline: none;
    background: #fff;
    margin: 0;
  }
` 
export const ImgsContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  gap: .5rem;
  img {
    cursor: pointer;
    width: 100%;
    height: 450px;
    object-fit: cover;
    background: rgba(0,0,0,.05);
    transition: .1s;
  }
  img:hover {
    background: rgba(0,0,0,.1);
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: .5rem;
  }
  div img {
    width: 100%;
    height: 100%;
  }
`

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, .1);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoaderModal = styled.div`
  width: 300px;
  border: 2px solid #E4FCDB;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  padding: 2.5rem 1rem;
  img {
    width: 90px;
  }
  p {
    font-size: 1.6rem;
    color: #666;
  }
`