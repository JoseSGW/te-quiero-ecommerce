import styled from 'styled-components';

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  margin: .5rem 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,.12);
  h3 {
    font-weight: 500;
  }
  span {
    color: #75BA93;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`