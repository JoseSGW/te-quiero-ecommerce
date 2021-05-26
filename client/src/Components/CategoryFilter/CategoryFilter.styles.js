import styled from "styled-components";

export const CategoryButton = styled.button `
    font-family: sans-serif;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    max-width: 70%;
    /* margin-left: 2rem; */
    margin-top: 0.5rem;
`;

export const CategoryInput = styled.input `
    font-family: sans-serif;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    max-width: 50%;
    /* margin-left: 2rem; */
    margin-top: 0.5rem;
`;
export const CategoryFilterContainer = styled.div `
    width: 100%; /* this is the width of this bar */
    display: flex;
    padding-left: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${(props) => props.theme.styles.colors.verdeTe};
    button {
        border: 2px solid #36825b;
        background-color: transparent;
        padding: 7px 10px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        font-family: Roboto;
        color: ${(props) => props.theme.styles.colors.verdeTe};
        margin-top: 2rem;

        &:hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.styles.colors.verdeTe};
            color: ${(props) => props.theme.styles.colors.fauxNyanza};
        }
    }

    
`;

export const CategoryType = styled.div `
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    /* margin-left: 2rem; */
    margin-top: 1rem;
    margin-bottom: 1em;

    &:first-child {
        margin-top: 0;
    }
`;

export const FilteringElements = styled.div `
    display: ${props => props.display};
`;