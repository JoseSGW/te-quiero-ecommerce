import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startLoadingOrders } from '../../../actions/orders';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal, DivSearch } from '../ProductsManagement/ProductsManagement.styles';

const OrdersManagement = () => {

  const dispatch = useDispatch();
  const navigate = useHistory();
  const { orders } = useSelector(state => state.orders);
  const { loading } = useSelector(state => state.loading);
  const [statusSelect, setStatusSelect] = useState('');


  useEffect(() => {
    dispatch(startLoadingOrders(statusSelect))
  }, [statusSelect]);

  let catName;
  const DeleteButton = (id) => {
    document.querySelector('#modal').classList.add('active');
    catName = id;
  }

  const CancelButton = () => {
    document.querySelector('#modal').classList.remove('active');
  }

  const ConfirmDeleteButton = async () => {
    try {
      document.querySelector('#modal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  const statusSelector = () => {
    const st = document.getElementById('statusSelector');
    const stSelect = st.options[st.selectedIndex].value;
    setStatusSelect(stSelect);
  }

  return (
    <Container>
      <TopContainer>
        <DivSearch>
          <h3>Filtrar por estado:</h3>
          <select id='statusSelector' name="statusSelector" onChange={statusSelector}>
            <option value="" selected>Todos</option>
            <option value="Open">Creada</option>
            <option value="InProcess">Procesando</option>
            <option value="Complete">Completada</option>
            <option value="Cancelled">Cancelada</option>
          </select>
        </DivSearch>
        <div></div>
      </TopContainer>
      <Products>
        <Title orders>
          <h3>Total: {orders?.length}</h3>
          <h3>Usuario perteneciente</h3>
          <h3>Estado</h3>
          <h3>ID de orden</h3>
          <h3>ID de usuario</h3>
          <div></div>
          <div></div>
          <div></div>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (orders?.length !== 0
          ? orders?.map(order => (
              <Product orders key={order.id}>
                <img src="https://icongr.am/entypo/newsletter.svg?size=128&color=75BA93" alt="example"/>
                <span>{order.user.username}</span>
                {order.status === 'InProcess' && <span>Procesando</span>}
                {order.status === 'Open' && <span>Creada</span>}
                {order.status === 'Cancelled' && <span>Cancelada</span>}
                {order.status === 'Complete' && <span>Completada</span>}
                <p>{order.id}</p>
                <p>{order.user.id}</p>
                <div></div>
                <div></div>
                <button onClick={() => navigate.push(`/admin/view-order/${order.id}`)}>Ver detalle</button>
              </Product>
            ))
          : <h1>No hay ordenes</h1>
          )
        }
        <DeleteModal id='modal'>
          <Modal>
            <img src="https://icongr.am/entypo/warning.svg?size=128&color=FF0000" alt="alert"/>
            <h3>¿Estás Segur que quieres borrar esta categoría?</h3>
            <button onClick={ConfirmDeleteButton}>Borrar</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
      </Products>
    </Container>
  )
}

export default OrdersManagement
