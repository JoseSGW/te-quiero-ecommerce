import styled from 'styled-components'// color: #75ba93;


export const ErrorsSpan = styled.span`
display:block;
margin-bottom: 5px;
padding-bottom: 4px;

border-raius:5px;
text-weight:bold;
text-align:center;

`
export const Out = styled.div`
display:flex;
justify-content:center;

`
export const LoginForm = styled.div`
    min-width:320px;
    background-color: #E4FCDB;
    display:flex;
    flex-direction:row;
    max-width:70%;
    margin: 3%;
    justify-content:center;
    align-self:center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: Lato;
    color: #36825B;
    
    
    div {
        margin-left:2%;
        width:30%;
        background-color: #E4FCDB;
        
    h2{
        text-align:center;
    }
    p{
        text-align:center;
        font-weigth:bold;
        font-size:1.2rem;
    }
    
    }
    form {
        padding:5%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        div{
            width:100%;
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
            margin-bottom: 15px;
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
    }
    
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
export const NoAccount= styled.span`
    display:flex;
    flex-direction:row;
    margin:0;
    padding:0;
    align-items:center;
    justify-content:center;
    p{
        font-size:0.9rem;
        margin-right:3px;
          
    }
    button{
        width: 30%;
        margin: 5px !important;
        
    }

`