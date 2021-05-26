import styled, { css } from "styled-components";

export const NavContainer = styled.div`
    background: #E4FCDB;
`

export const NavBar = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "logo search login";

    @media only screen and (max-width: 600px) {
        width: 90%;
        grid-template-columns: 1fr;
        grid-template-areas:
            "logo"
            "login"
            "search";
    }
`;

export const LogoContainer = styled.div`
    grid-area: logo;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 250px;
        height: 100px;
        object-fit: cover;
        margin-left: -45px;
    }

    @media only screen and (max-width: 600px) {
        justify-content: center;
        img {
            margin-left: 0;
            width: 200px;
            height: 70px;
        }
    }
`;

export const Search = styled.div`
    grid-area: search;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;

    @media only screen and (max-width: 600px) {
        margin-bottom: 0;
    }
`;

export const SessionBar = styled.div`
    grid-area: login;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #36825B;
    a {
        text-decoration: none;
        color: #36825B;
        margin-left: .3rem;
        cursor: pointer;
        padding: 7px 10px;
    }
    /* a:first-child {
        margin-left: 0;
        background: #36825B;
        color: #fff;
        padding: .3rem .5rem;
        border-radius: 3px;
    } */
    a:hover{
        background: #36825B;
        color: white;
    }
    @media only screen and (max-width: 600px) {
        margin: 1rem 0;
        justify-content: center;
    }
`;

export const Categories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    a {
        /* position: relative; */
        cursor: pointer;
        text-decoration: none;
        margin: 0 .5rem;
        color: #36825b;
        padding: 7px 10px;
    }
    a:after {
        content: '';
        position: absolute;
        background: #36825B;
        bottom: -5px;
        left: 0;
        height: 3px;
        width: 100%;
        transform: scaleX(0);
        transition: .1s;
        transform-origin: left;
    }
    a:hover:after {
        transform: scaleX(1);
    }
    a:hover{
        background: #36825B;
        color: white;
    }
`;

// export const NavBar = styled.div`
//     display: flex;
//     flex-direction: column;
//     background-color: #E4FCDB;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
//     @media (max-width: 767px) {
//         height: 12vh;
//         display: flex;

//         span {
//             display: flex;
//             flex-direction: row;
//             div {
//                 img {
//                     display: flex;
//                     top: -6%;
//                     left: 17%;
//                 }
//             }
//         }
//     }
//     div {
//         img {
//             margin-left: 63px;
//             margin-top: -1%;
//             width: 160px;
//         }
//     }
//     img {
//         position: absolute;
//         width: 140px;
//         left: 4px;
//         top: -2%;
//         cursor: pointer;
//     }

//     @media (max-width: 767px) {
//         img {
//             display: none;
//         }
//     }

//     @media (min-width: 1441px) {
//         div {
//             img {
//                 display: none;
//             }
//         }
//     }
// `;

// export const SessionBar = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     flex-direction: row;
//     ul {
//         display:none;
//     }
//     a {
//         text-decoration: none;
//         padding: 7px;
//         margin: 3px;
//         color: #36825b;
//         justify-content:center;
//         align-items:center;
           
//         &:hover {
//             cursor: pointer;
//             background-color: #36825b;
//             color: #e4fcdb;
//             border-radius: 3px;
//         }
//     }
//     span {
//         display: none;
//     }

    
// `;

// export const Search = styled.div`
//     display: flex;
//     justify-content: center;
//     padding:5px;
    
//     span {
//         display: none;
//     }
//     input {
        
//         width: 20rem;
//         font-family: Lato;
        
//         color: #36825b;
        
//         text-align: center;
        
//     }
//     button {
        
//         background-color: transparent;
//         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
//         border-radius: 4px;
//         font-family: Roboto;
//         color: #36825b;
//         &:hover {
//             cursor: pointer;
//             background-color: #36825b;
//             color: #e4fcdb;
//         }
//     }
//    `;

// export const Categories = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
    
//     margin-top: 5px;
//     span {
//         display: none;
//     }
//     div {
//         margin: 15px;
//     }
//     a {
//         padding: 10px;
//         text-decoration: none;
//         color: #36825b;
//         padding: 10px;
//         &:hover {
//             cursor: pointer;
//             background-color: #36825b;
//             color: #e4fcdb;
//             border-radius: 3px;
//         }
//     }
//     @media (max-width: 767px) {
//         div {
//             display: none;
//         }
//         span {
//             position: absolute;
//             display: flex;
//             margin-top: 2%;
//             width: 60%;
//             left: 20px;
//             top: 2%;
//         }
//     }
// `;
