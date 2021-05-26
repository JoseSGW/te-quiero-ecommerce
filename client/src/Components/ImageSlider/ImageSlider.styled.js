import styled from "styled-components";

export const Slider = styled.section`
    position: relative;
    z-index: 0;
    max-width: 100%;
    height: 500px;
    margin: .5rem auto;
`;

export const Cont = styled.section`
    height: 500px;
    width:100%;
    position: absolute;
    top: 0;
    cursor: pointer;
    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        /* box-shadow: 0px 0px 10px rgba(0,0,0,.2); */
    }
`

export const LeftArrow = styled.div`
    position: absolute;
    top: calc(50% - 23px);
    left: 32px;
    font-size: 3rem;
    color: #e4fcdb;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const RightArrow = styled.div`
    position: absolute;
    top: calc(50% - 23px);
    right: 32px;
    font-size: 3rem;
    color: #e4fcdb;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

// export const Image = styled.div`

//     img {
//         padding: 0;
//         margin: 0;
//         width: 100%;
//         object-fit: cover;
//         justify-content:center;
//         align-items:center;
//         height: auto;
//     }
// `;
