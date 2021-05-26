import styled, { css } from 'styled-components'

export const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 0;
  background: #E4FCDB;
  h2, p {
    margin: 0;
  }
`
export const TopCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 0 2rem;
`
export const TopCard = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  img {
    width: 35px;
  }
  span{
    color: rgba(117, 186, 147, 1);
  }
`

export const Linea = styled.div`
display:flex;
flex-direction: row;
button {
  margin:2px;
  border:none;
  background-color:#E4FCDB;
  padding:10px;
  border-radius:3px;
  p{
    background: #fff;
    padding:5px;
    }
  span{
     display: none;
     &:hover{
        background: #fff;
        padding:5px;
        display:flex;
      }

  }
}

`
export const Sales = styled.p`
display:none;
p{
  &:hover{
  display:flex;
  background: #fff;
  padding:5px;
}}

`

export const GraphicsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0 2rem;
`
export const GraphicCard = styled.div`
  height: 100%;
  ${props => props.right && css`
    gap: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `};
`
export const LineGraphic = styled.div`
  padding: 1rem 1rem;
  background: #fff;
  height: 400px;
  ${props => props.barras && css`
    height: 100%;
  `};
`
export const PieGraphic = styled.div`
  background: #fff;
  height: 180px;
  display: flex;
  align-items: center;
  h3 {
    padding-left: 2.5rem;
    margin-top: -1rem;
    font-weight: 400;
  }
`
export const DoughnutGraphic = styled.div`
  background: #fff;
  height: 236px;
  display: flex;
  align-items: center;
  h3 {
    padding-left: 2.5rem;
    margin-top: -1rem;
    font-weight: 400;
  }
`

export const BarGraphic = styled.div`
  padding: 1rem 1rem;
  background: #fff;
  height: 400px;
`

export const HorizontalBarGraphic = styled.div`
  background: #fff;
  
  /* } */
  `