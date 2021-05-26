import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`
export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  height: 20vh;
  img {
    width: 230px;
    object-fit: cover;
    height: 10vh;
    margin-left: -70px;
  }
  h2, p {
    margin: 1rem 0;
    color: #75BA93;
    text-transform: uppercase;
  }
  p {
    color: #666;
  }
`
export const TopRight = styled.div`
  text-align: end;
  a {
    background: #E4FCDB;
    color: #666;
    /* padding: 1rem 2rem; */
    padding: .6rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 13px;
    text-align: right;
    text-decoration: none;
    box-shadow: 2px 2px 1px rgba(185, 234, 164, 1);
  }
  a:hover {
    background: #75BA93;
    color: #fff;
    box-shadow: none;
  }
`
export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Nav = styled.div`
  min-height: 5vh;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0,0,0,.05);
  a {
    margin-bottom: -1px;
    margin-right: 1rem;
    background: #E4FCDB;
    padding: .5rem 1rem;
    color: #666;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0,0,0,.07);
    text-decoration: none;
  }
  a:hover,
  a.active {
    background: #75BA93;
    color: #fff;
    border-bottom: 1px solid #75BA93;
  }
  a:last-child {
    margin-right: 0;
  }
`