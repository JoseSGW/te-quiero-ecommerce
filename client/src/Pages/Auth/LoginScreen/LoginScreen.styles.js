import styled from 'styled-components'// color: #75ba93;


export const ErrorsSpan = styled.span`
display:block;
margin-bottom: 5px;
padding-bottom: 4px;

border-radius:5px;
font-weight:bold;
text-align:center;

`

export const Button = styled.button`
background-color: whitesmoke !important; 
color: black !important;
font-size: 17px;
display: flex;
align-items: center;
 img{
     width: 10px;
 }
`

export const AuthContainer = styled.div`
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Out = styled.div`
    width: 1200px;
    margin: 3rem auto;
`
export const LoginForm = styled.div`
    background-color: #E4FCDB;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* max-width:70%; */
    /* margin: 3%; */
    /* justify-content:center;
    align-self:center; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: Lato;
    color: #36825B;
    img {
        width: 100%;
        border-radius: 5px 0 0 5px;
    }
    
    h2{
        text-align:center;
    }
    p{
        text-align:center;
        font-weight:bold;
        font-size:1.2rem;
    }
    
    form {
        /* padding:5%; */
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width: 80%;
        margin: auto;
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
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 90%;
        height: 100%;
        padding: 1rem 0;
        margin: 0 auto;
        img{
            display: none;
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
    margin:0;
    padding:0;
    align-items:center;
    justify-content:center;
    p{
        font-size:0.9rem;
        margin-right:3px;
    }
    button{
        margin: 5px !important;
        height: fit-content;
        text-transform: uppercase;
        border: none !important;
        box-shadow: none !important;
        font-weight: 700;
    }

`