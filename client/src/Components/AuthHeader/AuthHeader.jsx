import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderContainer } from './AuthHeader.styles'
import Logo from '../../img/Marca.png';

const AuthHeader = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={Logo} alt="logo"/>
      </Link>
    </HeaderContainer>
  )
}

export default AuthHeader
