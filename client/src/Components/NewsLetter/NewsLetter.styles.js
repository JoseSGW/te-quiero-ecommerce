import styled from 'styled-components';

export const BoxContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  /* gap: 3rem; */
  justify-content: space-between;
  border-radius: 5px;
  img {
    width: 500px;
    border-radius: 5px;
  }
  h2 {
    margin: 0;
    color: #75BA93;
    /* color: #36825B; */
  }
  h2:first-child {
    color: #000;
  }
  p {
    width: 90%;
    line-height: 20px;
  }
  form {
    padding: 3rem 3rem 3.5rem;
    margin-right: 2rem;
    input {
      border-bottom: 1px solid #75BA93;
      border-top: 1px solid #75BA93;
      border-left: 1px solid #75BA93;
      border-right: none;
      padding: .6rem;
      border-radius: 5px 0 0 5px;
      outline: none;
      margin-top: .5rem;
    }
    button {
      background: #75BA93;
      border-radius: 0 5px 5px 0;
      color: #fff;
      width: fit-content;
      border: none;
      text-transform: uppercase;
      padding: .6rem;
      outline: none;
      border-bottom: 1px solid #75BA93;
      border-top: 1px solid #75BA93;
      border-right: 1px solid #75BA93;
      border-left: none;
      box-shadow: none;
    }
  }

  @media (max-width: 950px){
          width: 100%;
            img {
              display: none;
              /* padding: 2rem;
              width: 50%;
              height: auto;
              border-radius: 5px; */
            }
            form{
              max-width: 100%;
              margin: 0;
              padding: 1rem;
            }
        }    
`