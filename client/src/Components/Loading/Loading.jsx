import React from 'react'
import { Container, Rotate, Spinner } from './Loading.styles'

const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Rotate></Rotate>
      </Spinner>
    </Container>
  )
}

export default Loading