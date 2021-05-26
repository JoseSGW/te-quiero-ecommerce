import styled from "styled-components";

export const SearchBar = styled.div`
    width: 100%;
   form {
        /* margin-right: 2rem; */
        display: flex;
        /* width: 100%; */
        div{
          flex: 1;
        }
            input {
              border-bottom: 1px solid #B9EAA4;
              border-top: 1px solid #B9EAA4;
              width: 100%;
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

`;
export const SearchFlex = styled.div`
    display: flex;
    justify-content: center;
`;

export const Chan = styled.div`
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  max-width: 370px;
`