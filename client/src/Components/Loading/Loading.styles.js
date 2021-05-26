import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  0% { transform: scale(1) rotate(360deg) }
  50% { transform: scale(.5) rotate(-360deg) }
  100% { transform: scale(1) rotate(360deg) }
`

export const Container = styled.div`
  position: relative;
  background: #fff;
  width: 100vw;
  height: calc(100vh - 120px);
`
export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: calc(50% - 3rem);
  left: calc(50% - 3rem);
  transform: translate(-50%, -50%);
`
export const Rotate = styled.div`
  width: 100%;
  height: 100%;
  border: 10px solid #F5F7FA;
  border-radius: 50%;
  border-top-color: #B9EAA4;
  border-bottom-color: #B9EAA4;
  animation: ${rotate} 5s linear infinite;
`