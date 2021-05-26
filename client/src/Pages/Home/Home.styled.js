import styled from "styled-components";

export const HomeFlex = styled.div``;

export const Row = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  &:first-child {
    margin-bottom: 3rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column !important;
  /* margin: 2% 4%; */
  cursor: pointer;
  /* width: 10%; */
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.1s;

  span {
    font-weight: 900;
  }
  &:hover span {
    background-color: #36825b;
    color: #e4fcdb;
    padding: 5%;
    border-radius: 0 0 3px 3px;
  }
  &:hover img {
    border: solid 3px #36825b;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    max-width: 90vw;
    margin: 30px;
  }
`;

export const Te = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;

  img {
    width: calc(100% - 6px);
    border: solid 3px #dcf7cc;
  }
  span {
    color: #36825b;
    padding: 5%;
    text-align: center;
    background-color: #e4fcdb;
  }
`;

export const Ultimos = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  img {
    width: 100%;
    border-radius: 5px;
    border: solid 4px #e4fcdb;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    max-width: 80vw;
    margin: 30px;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-top: 3rem;
  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    color: #36825b;

    @media (max-width: 700px) {
      font-size: 3rem;
    }

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }
`;

export const MiniCards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e4fcdb;
  font-family: Roboto;
  color: #36825b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 100%;
  max-width: 300px;
  margin: 5% 1%;
  transition: 0.1s;
  img {
    width: 100%;
    height: auto;
  }
  h2 {
    color: #36825b;
    font-family: Roboto;
    text-align: center;
    /* font-weight: 900; */
  }
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    padding: 1px;
    cursor: pointer;
  }
`;
