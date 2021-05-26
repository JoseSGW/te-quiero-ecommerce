import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  min-width: 300px;
  background: #E4FCDB;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(54, 130, 91, .3);
  h3 {
    font-size: 20px;
  }
  label {
    margin-bottom: .5rem;
    font-size: 14px;
    color: #666;
  }
  input {
    margin-bottom: 1rem;
    padding: .5rem;
    border: 1px solid #75BA93;
    border-radius: 5px;
  }
`