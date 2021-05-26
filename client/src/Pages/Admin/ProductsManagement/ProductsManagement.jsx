import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLoadingProducts, deleteProductById, searchProduct, cleanSearchProduct } from '../../../actions/products';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal, DivSearch } from './ProductsManagement.styles';

const ProductsManagement = () => {
  const dispatch = useDispatch();
  const { products, search } = useSelector(state => state.products);
  const { loading } = useSelector(state => state.loading);
  const [keyword, setKeyword] = useState('');

  const navigate = useHistory();

  useEffect(() => {
    {products.length === 0 && dispatch(startLoadingProducts())}
  }, []);

  const handleSubmit = (e) => {
    if(keyword.length !== 0) {
      e.preventDefault();
      dispatch(searchProduct(keyword));
      setKeyword('');
    } else {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const showProducts = (search.length === 0)
    ? products
    : search;

  let idModal;
  const DeleteButton = (id) => {
    document.querySelector('#modal').classList.add('active');
    idModal = id;
  };

  const CancelButton = () => {
    document.querySelector('#modal').classList.remove('active');
  };

  const ConfirmDeleteButton = async () => {
    try {
      await dispatch(deleteProductById(idModal));
      dispatch(startLoadingProducts())
      document.querySelector('#modal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  let defaultImg = "https://okdiario.com/img/recetas/2016/10/26/beneficios-del-te-de-limon.jpg";

  return (
    <Container>
      <TopContainer>
        <DivSearch>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar producto' value={keyword} onChange={handleChange}/>
            <button type='submit'>Buscar</button>
          </form>
          {search.length !== 0 && <button onClick={() => dispatch(cleanSearchProduct())}>Ver Todos los productos</button>}
        </DivSearch>
        <button onClick={() => navigate.push(`/admin/create-product`)}>Crear Producto</button>
      </TopContainer>
      <Products>
        <Title>
          <h3>Total: {showProducts.length}</h3>
          <h3>Nombre</h3>
          <h3>ID</h3>
          <h3>Color</h3>
          <h3>Stock</h3>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (showProducts?.length !== 0
          ? showProducts?.map(product => (
              <Product key={product.id}>
                <img src={product.images.length !== 0 ? product.images[0].name : defaultImg} alt="example"/>
                <span>{product.name}</span>
                <p>{product.id}</p>
                <p>{product.color}</p>
                <p>{product.stock}</p>
                <button onClick={() => navigate.push(`/product/detail/${product.id}`)}>Ver</button>
                <button onClick={() => navigate.push(`/admin/edit-product/${product.id}`)}>Editar</button>
                <button onClick={() => DeleteButton(product.id)}>Borrar</button>
              </Product>
            ))
          : <h1>No hay productos</h1>
          )
        }
        <DeleteModal id='modal'>
          <Modal>
            <img src="https://icongr.am/entypo/warning.svg?size=128&color=FF0000" alt="alert"/>
            <h3>¿Estás Seguro que quieres borrar este producto?</h3>
            <button onClick={ConfirmDeleteButton}>Borrar</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
      </Products>
    </Container>
  )
}

export default ProductsManagement
