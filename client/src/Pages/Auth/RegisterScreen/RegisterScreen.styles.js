import styled from 'styled-components'// color: #75ba93;



export const Out = styled.div`
    max-width: 1200px;
    margin: 3rem auto;
`
export const Cancel = styled.span`
    display:flex;
    align-items:center;
    color:#d11a2a;
`
export const CreateUser = styled.div`
    margin: auto;
    background-color: #E4FCDB;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: Lato;
    color: #36825B;

    img {
        width: 100%;
        height: 800px;
        object-fit: cover;
        border-radius:5px 0 0 5px;
    }
    h2{
        text-align:center;
    }
    span {
        display:flex;
        justify-content: center;
        align-items:center;
    }
    form {
        display:flex;
        flex-direction:column;
        width: 80%;
        margin: auto;

        div {
            display: flex;
            justify-content: space-between;
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
            /* width:100%; */
            border-bottom: 1px solid #36825B;
            ::placeholder {
                font-size:16px;
                font-style:italic;
                text-align:center;
                color: #BAB7A3;
            }
        }
        select {
            margin-left: 1rem;
            width: auto;
            padding: 3px;
            border: 1px solid #75BA93;
            background: #fff;
        }
        button{
            border: 2px solid #36825B;
            background-color:transparent;
            padding:10px ;
            
            width: fit-content;
            margin: auto;
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
export const RadioButton = styled.div`
    display: flex;
    label {
        display: flex;
    }
    input {
        margin-left: 1rem;
    }
`

export const ErrorsSpan = styled.span`
display:block;
margin-bottom: 5px;
padding-bottom: 4px;

border-radius:5px;
font-weight:bold;
text-align:center;

`
export const DisabledButton = styled.span`
background-color:rgba(0, 0, 0, 0.2);
padding:10px ;
/* margin:5% 30%; */
width: fit-content;
margin: auto;
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