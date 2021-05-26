import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal } from '../ProductsManagement/ProductsManagement.styles';
import { deleteStoreById, showStores } from '../../../actions/stores';

const StoresManagement = () => {
  const dispatch = useDispatch();
  const { stores } = useSelector(state => state.stores);
  const { loading } = useSelector(state => state.loading);

  useEffect(() => {
    {stores.length === 0 && dispatch(showStores())}
  }, []);

  let storeId;
  const DeleteButton = (id) => {
    document.querySelector('#modal').classList.add('active');
    storeId = id;
  }

  const CancelButton = () => {
    document.querySelector('#modal').classList.remove('active');
  }

  const ConfirmDeleteButton = async () => {
    try {
      await dispatch(deleteStoreById(storeId));
      dispatch(showStores())
      document.querySelector('#modal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Container>
      <TopContainer>
        {/* <form onSubmit={() => alert('Falta la logica')}>
          <input type="text" placeholder='Buscar usuario'/>
          <button>Buscar</button>
        </form> */}
        <div></div>
        <button>Añadir Tienda</button>
      </TopContainer>
      <Products>
        <Title>
          <h3>Total: 3</h3>
          <h3>Nombre</h3>
          <h3>ID</h3>
          <h3>Ubicación</h3>
          <div></div>
          <div></div>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (stores?.length !== 0
          ? stores?.map(store => (
              <Product key={store.id}>
                <img src="https://icongr.am/material/account.svg?size=128&color=75BA93" alt="example"/>
                <p>{store.name}</p>
                <p>{store.id}</p>
                <p>{store.location}</p>
                <div></div>
                <div></div>
                <button>Editar</button>
                <button onClick={() => DeleteButton(store.id)}>Borrar</button>
              </Product>
            ))
          : <h1>No hay Tiendas</h1>
          )
        }
        <DeleteModal id='modal'>
          <Modal>
            <img src="https://icongr.am/entypo/warning.svg?size=128&color=FF0000" alt="alert"/>
            <h3>¿Estás Segur que quieres borrar esta tienda?</h3>
            <button onClick={ConfirmDeleteButton}>Borrar</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
      </Products>
    </Container>
  )
}

export default StoresManagement
