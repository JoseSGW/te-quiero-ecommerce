import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById, showUsers, userPromote, adminToUser, forceResetPassword } from '../../../actions/users';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal, StatusSelectors } from '../ProductsManagement/ProductsManagement.styles';
import { removeAll } from '../../../actions/shoppingActions';

const UsersManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  const { loading } = useSelector(state => state.loading);
  const [rolSelect, setRolSelect] = useState('null');
  const [idRolUser, setIdRolUser] = useState('');

  useEffect(() => {
    {users?.length === 0 && dispatch(showUsers())}
  }, [])
  
  let idUserDelete;
  const DeleteButton = (id) => {
    document.querySelector('#modalUserDelete').classList.add('active');
    idUserDelete = id;
  };

  const CancelButton = () => {
    document.querySelector('#modalUserDelete').classList.remove('active');
    document.querySelector('#rolModal').classList.remove('active');
    document.querySelector('#passwordModal').classList.remove('active');
  };

  const ConfirmDeleteButton = async () => {
    try {
      await dispatch(deleteUserById(idUserDelete));
      await dispatch(showUsers())
      document.querySelector('#modalUserDelete').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  const rolButton = (id2) => {
    document.querySelector('#rolModal').classList.add('active');
    setIdRolUser(id2);
  };

  const rolSelector = () => {
    const rl = document.getElementById('rolSelector');
    const rlSelect = rl.options[rl.selectedIndex].value;
    setRolSelect(rlSelect)
  }

  const ConfirmNewRol = async () => {
    const body = {id: idRolUser}
    try {
      if(rolSelect === 'user') {
        await dispatch(adminToUser(body));
      } else if(rolSelect === 'admin') {
        await dispatch(userPromote(body));
      }
      localStorage.clear()
      await dispatch(showUsers())
      document.querySelector('#modalUserDelete').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  const resetPasswordForce = (id3) => {
    document.querySelector('#passwordModal').classList.add('active');
    setIdRolUser(id3);
  };

  const confirmResetPassword = async () => {
    const body = {
      id: idRolUser,
      campo: 'resetPasswordForce',
      update: true
    }
    // const bodyPass = {
    //   id: idRolUser,
    //   campo: 'password',
    //   update: 'password'
    // }
    try {
      await dispatch(forceResetPassword(body));
      // await dispatch(forceResetPassword(bodyPass));
      document.querySelector('#passwordModal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TopContainer>
        {/* <form onSubmit={() => alert('Falta la logica')}>
          <input type="text" placeholder='Buscar usuario'/>
          <button>Buscar</button>
        </form> */}
        <div></div>
        <div></div>
      </TopContainer>
      <Products>
        <Title users>
          <h3>Total: {users?.length}</h3>
          <h3>Username</h3>
          <h3>ID</h3>
          <h3>Email</h3>
          <h3>Rol</h3>
          <div></div>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (users?.length !== 0
          ? users?.map(user => (
              <Product users key={user.id}>
                <img src="https://icongr.am/material/account.svg?size=128&color=75BA93" alt="example"/>
                <p>{user.username}</p>
                <p>{user.id}</p>
                <p>{user.email}</p>
                <p>{user.admin ? 'Admin' : 'User'}</p>
                <button onClick={() => rolButton(user.id)}>Cambiar rol</button>
                <button onClick={() => resetPasswordForce(user.id)}>Reset Password</button>
                <button onClick={() => DeleteButton(user.id)}>Borrar</button>
              </Product>
            ))
          : <h1>No hay usuarios</h1>
          )
        }
        <DeleteModal id='modalUserDelete'>
          <Modal>
            <img src="https://icongr.am/entypo/warning.svg?size=128&color=FF0000" alt="alert"/>
            <h3>¿Estás Segur que quieres borrar este usuario?</h3>
            <button onClick={ConfirmDeleteButton}>Borrar</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
        <DeleteModal id='rolModal'>
          <Modal status>
            <StatusSelectors userRol>
              <div>
                <h3>Selecciona el rol:</h3>
                <select id='rolSelector' name="rolSelector" onChange={rolSelector}>
                  <option value="null" selected>...</option>
                  <option value="user">Usuario</option>
                  <option value="admin">Admininstrador</option>
                </select>
              </div>
            </StatusSelectors>
            <button disabled={rolSelect === 'null' ? true : false} onClick={ConfirmNewRol}>Actualizar Rol</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
        <DeleteModal id='passwordModal'>
          <Modal password>
            <StatusSelectors>
              <h3>¿Quieres forzar un reset password?</h3>
            </StatusSelectors>
            <button onClick={confirmResetPassword}>Si Quiero</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
      </Products>
    </Container>
  )
}

export default UsersManagement
