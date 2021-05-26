import styled from "styled-components";
 
export const SingleItem = styled.div`
    display: flex;
    border:solid 3px #DCF7CC;
    background-color: #E4FCDB;
    font-family: Roboto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    align-items: center;
    margin: 1rem 1rem;
    width: 97%;
`;
export const Informacion = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 10rem;
    margin: 1rem 1rem;
    display: flex;
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
    }
`;
export const Imagen = styled.div`
    padding: 1rem 1rem;
    img {
        height: 150px;
    }
`;

export const Texto = styled.div`
    padding: 1rem 1rem;
    margin: 1rem 0;
    color: #75BA93;
    h1{
        margin-bottom:1.3rem;
        color: #36825b;
    }
    h3{
        margin-left:3rem;
    }
    
`;
export const Botones = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    div{
        display:flex;
        flex-direction: row;
        margin:4px 2px;
        align-items: center;
    }
    button {
        background-color: #d11a2a;
        border:none;
        display: flex;
        flex-direction:row;
        border-radius:5px;
        justify-content:center;
        align-items:center;
        text-align: center;
        padding:5px;
        color: white;
        padding: 0.3rem .6rem;
        outline: none;
        font-family:roboto;
      
    }
    input {
        background-color:white;
        width:3rem;
        height: fit-content ;
        text-align:center;
        padding:1px 3px;
        font-size:1.3rem;
        user-select: none;
        
    }
    p{
        color:#d11a2a;
        font-weight: bold;
        text-align:center;
    }

`;
export const Plus = styled.div`
      text-align:center;
      justify-content:center;
      padding:2px 3px;
      font-size:0.9rem;
      height: fit-content ;
      background-color: #36825b;
      color:white;
      border-radius:4px;
`