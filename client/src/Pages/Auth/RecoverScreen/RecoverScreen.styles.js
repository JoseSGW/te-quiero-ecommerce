import styled from 'styled-components';

export const ForgotCard = styled.div`
  background: #e4fcdb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  img {
    width: 15px;
    cursor: pointer;
    background: #e4fcdb;
    background: rgba(0,0,0,.1);
    padding: 8px;
    border-radius: 50px;
    margin-bottom: 1.5rem;
  }
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: 3rem;
    color: #666;
  }
  input {
    width: auto;
    margin-bottom: 3rem;
    padding: 10px;
    border: 1px solid #75BA93;
    border-radius: 3px;
  }
  button{
    border: 1px solid #36825B;
    background-color:transparent;
    padding:10px ;
    border-radius:4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-family: Roboto;
    color:#36825B;
    text-transform: uppercase;
    &:hover {
    cursor: pointer;
    background-color:#75ba93;
    color:#E4FCDB;
    }
  }
`