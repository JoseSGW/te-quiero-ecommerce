import styled from 'styled-components'// color: #75ba93;



export const Out = styled.div`
display:flex;
justify-content:center;

span{
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:10%;
    margin-bottom:10%;
    background-color: #E4FCDB;
    width:30%;

div {
    
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    color: #36825B;
}

    button{
        border: 2px solid #36825B;
        background-color:transparent;
        padding:10px ;
                  
        margin:5% 30%;
        border-radius:4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        font-family: Roboto;
        color:#36825B;
        &:hover {
        cursor: pointer;
        background-color:#75ba93;
        color:#E4FCDB;
        
        }
    }
`