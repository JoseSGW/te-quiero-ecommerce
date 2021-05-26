import styled from 'styled-components'// color: #75ba93;



export const Out = styled.div`
display:flex;
justify-content:center;

`
export const Cancel = styled.span`
display:flex;
align-items:center;
color:#d11a2a;
`
export const CreateUser = styled.div`
    min-width:318px;
    background-color: #E4FCDB;
    width:60%;
    display:flex;
    flex-direction:row;
    margin-top: 5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: Lato;
    color: #36825B;
    h2{
        text-align:center;
    }
    span {
        display:flex;
        justify-content: center;
        align-items:center;
    }
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
            ::placeholder {
                font-size:16px;
                font-style:italic;
                text-align:center;
                color: #BAB7A3;
            }
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

export const ErrorsSpan = styled.span`
display:block;
margin-bottom: 5px;
padding-bottom: 4px;

border-raius:5px;
text-weight:bold;
text-align:center;

`
export const DisabledButton = styled.span`
background-color:rgba(0, 0, 0, 0.2);
padding:10px ;
margin:5% 30%;
border-radius:4px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
text-align:center;
color:#36825B;
font-family: Lato;
&:hover {
    cursor: auto;
    background-color: rgba(0, 0, 0, 0.2);
    color:#36825B;
    
    
    }
 
`