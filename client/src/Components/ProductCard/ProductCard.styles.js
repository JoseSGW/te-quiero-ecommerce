import styled from "styled-components";
//#36825b
//#e4fcdb;
//#CDF8B5 

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const Card = styled.div`
    font-family: Roboto;
    background: #e4fcdb;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    /* height: auto; */
    height: 95%; // CHAN CHAN CHAN CHAN
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    transition: 0.1s;
    cursor: pointer;
    padding: 10px;

    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
    }
    h2 {
        color: #36825b;
        text-align: center;
        font-family: Roboto;
        font-size: 1.3rem;
    }
    p {
        color: #36825b;
        text-align: center;
        width: 100%;
        font-size: 1.2rem;
        font-weight:bold;
    }
    div {
        
        span{
            margin-left:2px;
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        button{
            background: #4D8FEA;
            display:flex;
            color: white;
            border:none;
            border-radius:5px;
            justify-content:center;
            align-items:center;
            text-align: center;
            padding: 0.3rem .6rem;
            font-family:roboto;
            &:hover {
                background-color:#1C49ED;
        }    
        &:hover {
            /* padding: 1px;
            cursor: pointer; */
        }}
    }
    &:hover {
        box-shadow: 8px 8px 2px 1px rgba(0, 0, 255, 0.2);
        /* padding: 1px; */
        transform: translateY(-5px);
    }
`;
export const Etiquetas = styled.div`
    padding: 3px 4px;
    border: solid 2px #36825b;
    margin: 0px 3px;
    border-radius: 5px;
    background: #36825b;
    color:#e4fcdb;   
`
export const Categories = styled.div`
    display:flex;
    justify-content: center;
    margin: 10px 0;
`
export const Black = styled.div`
    font-family: 'Dancing Script', cursive;
    color:black;
    font-size: 1.5rem;
    font-weight:bold;
    margin-right: 5px;
`
export const Green = styled.div`
    font-family: 'Dancing Script', cursive;
    color: #36825b;
    font-size: 1.5rem;
    font-weight:bold;
    margin-right: 5px;
`
export const White = styled.div`
   font-family: 'Dancing Script', cursive;
   color: #9C9CA1;
   font-size: 1.5rem;
   font-weight:bold;
    margin-right: 5px;
`
export const Blue = styled.div`
    font-family: 'Dancing Script', cursive;
    color: #131BF9;
    font-size: 1.5rem;
    font-weight:bold;
    margin-right: 5px;
`
export const Yellow = styled.div`
    font-family: 'Dancing Script', cursive;
    color: #FCCB19;
    font-size: 1.5rem;
    font-weight:bold;
    margin-right: 5px;
`
export const Red = styled.div`
    font-family: 'Dancing Script', cursive;
    color: #d11a2a;
    font-size: 1.5rem;
    font-weight:bold;
    margin-right: 5px;
`
export const Heart = styled.div`
    color:#e4fcdb;
    display:flex;
    justify-content:flex-end;
    font-weight:bold;
    margin-bottom: -5%;
    span{
        padding:5px;
        margin-right:2px;
        border-radius: 4px;
        display:flex;
        background-color: #75BA93;
    }
    span:hover {
        background-color: #36825B;
    }   
 &:hover{
    /* padding:5px; */
}

`