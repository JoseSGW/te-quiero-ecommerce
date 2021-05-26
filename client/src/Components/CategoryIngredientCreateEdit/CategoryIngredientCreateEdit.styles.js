import styled from "styled-components";


export const CategoryIngredientCreatorContainer = styled.div `
    width: 15%; /* this is the width of this bar */
    display: flex;
    padding-left: 2rem;
    margin-left: 40%;
    margin-top: 5%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${(props) => props.theme.styles.colors.teal};
    background-color: ${(props) => props.theme.styles.colors.fauxNyanza};
    border: 1px solid teal;
`;

export const Form = styled.form `
 
`;

export const Input = styled.input `
    margin-bottom: 1rem;
`;

export const FormText1 = styled.h1 `
    font-family: sans-serif;
    font-size: ${(props) => props.theme.styles.sizes.grande};
    font-weight: 700;
    /* margin-left: 2rem; */
    margin-top: 0.5rem;
    margin-bottom: 0.5em;
    /* color: red; */
`;

export const FormText2 = styled.h2 `
    font-family: sans-serif;
    font-size: ${(props) => props.theme.styles.sizes.mediana};
    font-weight: 700;
    /* margin-left: 2rem; */
    margin-top: 0.5rem;
    margin-bottom: 0.5em;
`;

export const Button = styled.button `
    margin: 1rem;
`;