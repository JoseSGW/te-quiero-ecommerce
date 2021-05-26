import styled from 'styled-components'

export const ShowForm = styled.div`
min-width:418px;
background-color: #E4FCDB;
width:30%;
margin-top: 7%;
margin-left:35%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
border-radius: 5px;
font-family: Lato;
color: #36825B;
form {
    padding:10%;
    display:flex;
    flex-direction:column;
    div{
        width:90%
    }
    label{
        font-size: 18px;
        margin:3px;
        
    }
    input{
        font-size:18px;
        color: #36825B;
        margin-top:5px;
        outline: none;
        background: transparent;
        margin-bottom: 20px;
        border: none;
        width:100%;
        border-bottom: 1px solid #36825B;
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

}
`