import styled from "styled-components";

export const FooterStyles = styled.section`
    width: 100%;
    margin-top: 3rem;
    background: #fff;
`;
export const FooterMenu = styled.div`
    max-width: 1200px;
    margin:  3rem auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1.5fr;
    grid-template-areas: "social list security";

    @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "list list"
            "social security";
        width: 90%;
    }
    @media only screen and (max-width: 600px) {
        grid-template-areas:
            "social"
            "list"
            "security";
        width: 90%;
    }
`;
export const Social = styled.div`
    grid-area: social;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    img {
        height: 150px;
        object-fit: contain;
        margin-left: -20px;
    }

    @media only screen and (max-width: 1280px) {
        width: 200px;
        padding: 40px 40px;
        img {
            height: 150px;
            object-fit: contain;
        }
    }
    @media (max-width: 600px) {
        padding: 0;
        width: auto;
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const SocialIcons = styled.div`
    p {
        font-size: 20px;
        margin: 0;
        margin-bottom: 20px;
    }
    img {
        margin-left: 0;
        height: 100%;
        width: 40px;
        margin-right: 10px;
    }
    div{
        display: flex;
    }

    @media only screen and (max-width: 600px) {
        div{
            flex-direction: row;
        }
    }
`;

export const FooterList = styled.div`
    grid-area: list;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div{
        ul {
        margin: 0;
        padding-inline-start: 0;
        }
        li {
            list-style: none;
            margin-bottom: 10px;
            color: #666;
        }
        span {
            font-weight: 900;
            color: #75ba93;
            text-transform: uppercase;
        }
    }
    
    @media only screen and (max-width: 600px) {
        max-width: 100vw;
        //margin: 6rem auto;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        /* gap: 3rem; */
        border-radius: 5px;
        grid-template-columns: 1fr;
        div{
            max-width: 100%;
            .primero {
            padding: 0;
            padding-inline-start: 0;
            margin: 0;
            flex-direction:column;
            top: 0;
            position: ${({ isOpen, element }) => isOpen && element === "primero" ? 'relative' : 'absolute'};
            opacity: ${({ isOpen, element }) => isOpen && element === "primero" ? 1 : 0};
            transform:  ${({ isOpen, element }) => isOpen && element === "primero" ? 'translateY(0)' : 'translateY(-100%)'};
            transition: transform 0.3s ease-in-out;
            transition: opacity .3s;

            }
            .segundo {
            padding: 0;
            padding-inline-start: 0;
            margin: 0;
            flex-direction:column;
            top: 0;
            position: ${({ isOpen, element }) => isOpen && element === "segundo" ? 'relative' : 'absolute'};
            opacity: ${({ isOpen, element }) => isOpen && element === "segundo" ? 1 : 0};
            transform:  ${({ isOpen, element }) => isOpen && element === "segundo" ? 'translateY(0)' : 'translateY(-100%)'};
            transition: transform 0.3s ease-in-out;
            transition: opacity .3s;
            }
            .tercero {
            padding: 0;
            padding-inline-start: 0;
            margin: 0;
            flex-direction:column;
            top: 0;
            position: ${({ isOpen, element }) => isOpen && element === "tercero" ? 'relative' : 'absolute'};
            opacity: ${({ isOpen, element }) => isOpen && element === "tercero" ? 1 : 0};
            transform:  ${({ isOpen, element }) => isOpen && element === "tercero" ? 'translateY(0)' : 'translateY(-100%)'};
            transition: transform .3s ease-in-out;
            transition: opacity .3s;
            }
            span {
            font-weight: 900;
            color: #75ba93;
            text-transform: uppercase; 
            margin-bottom: 0;       
            }
            div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            cursor: pointer;                       
            }   
        }
    }
`;

export const FooterSecurity = styled.div`
    grid-area: security;
    h3 {
        margin: 0;
        color: #75ba93;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    p {
        line-height: 20px;
        margin: 0;
        margin-bottom: 10px;
    }
    img {
        height: auto;
        width: 100px;
        margin: 0;
        margin-top: 20px;
    }

    @media only screen and (max-width: 1280px) {
        padding: 40px 40px;
    }
    @media only screen and (max-width: 600px) {
        padding: 0;
        margin-top: 30px;
    }
`;

export const Team = styled.div`
    min-height: 10vh;
    /* background: #75BA93; */
`;

export const Legal = styled.div`
    border-top: 1px solid rgba(185, 234, 164, 0.5);
    p {
        text-align: center;
        color: #75ba93;
        margin: 0;
        padding: 1rem 0;
    }
`;
