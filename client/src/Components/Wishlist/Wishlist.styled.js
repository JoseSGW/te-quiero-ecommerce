import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content:center;
`;
export const ContainerFlex = styled.div`
    padding: 3rem;
    background-color:#e4fcdb;
    height: fit-content;
    box-shadow: 0 4px 8px 0 #75BA93;
    border:solid 3px #e4fcdb;
    border-radius: 3px;
    width:18%;
    margin-top: 5%;
    margin-right: 2%;
    
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
        
    }
`;
export const ContainerList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 2.5rem 2.5rem;
    justify-content:space-around;
    
    flex-wrap:wrap;
`;
