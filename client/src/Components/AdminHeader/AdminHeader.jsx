import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BackButton, BottomSection, Header, Nav, TopRight, TopSection } from './AdminHeader.styles'

import logo from '../../img/Marca.png';
import { useSelector } from 'react-redux';

const AdminHeader = () => {
  const { pathname } = useLocation();
  const { user } = useSelector(state => state.users);

  return (
    <Header>
      <TopSection>
        <img src={logo} alt="Logo"/>
        <div>
          <h2>Panel de administración</h2>
          <p>{user?.name}</p>
        </div>
        <TopRight>
          <Link to='/'>Volver a la tienda</Link>
        </TopRight>
      </TopSection>
      <BottomSection>
        <Nav>
          <NavLink activeClassName='active' to='/admin/products'>Productos</NavLink>
          <NavLink activeClassName='active' to='/admin/orders'>Ordenes</NavLink>
          <NavLink activeClassName='active' to='/admin/users'>Usuarios</NavLink>
          <NavLink activeClassName='active' to='/admin/categories'>Categorias</NavLink>
          <NavLink activeClassName='active' to='/admin/ingredients'>Ingredientes</NavLink>
          <NavLink activeClassName='active' to='/admin/stats'>Estadisticas</NavLink>
          {/* <NavLink activeClassName='active' to='/admin/stores'>Tiendas</NavLink> */}
        </Nav>
        <Nav>
          {(pathname.includes('edit') || pathname.includes('create') || pathname.includes('view')) &&
            <NavLink activeClassName='active' to='/admin'>Volver al panel</NavLink>
          }
        </Nav>
      </BottomSection>
    </Header>
  )
}

export default AdminHeader
