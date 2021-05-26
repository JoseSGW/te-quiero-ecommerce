import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const ContainerFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;
    img {
        height: 250px;
        padding-bottom: 5em;
    }
`;

export const Botones = styled.div`
    height: 2em;
    border: 1px solid #b9eaa4;
    input {
        height: 90%;
        border: none;
        padding-left: 1em;
    }
    button {
        height: 100%;
        background: #e4fcdb;
        border: none;
    }

    button:hover {
        background: #36825b;
        color: white;
    }
`;
