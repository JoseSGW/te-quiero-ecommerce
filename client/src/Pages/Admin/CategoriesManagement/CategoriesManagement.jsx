import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal } from '../ProductsManagement/ProductsManagement.styles';
import { deleteCategoryByName, showCategories } from '../../../actions/categories';

const CategoriesManagement = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const { loading } = useSelector(state => state.loading);
  const history = useHistory()

  useEffect(() => {
    {categories.length === 0 && dispatch(showCategories())}
  }, []);

  let catName;
  const DeleteButton = (name) => {
    document.querySelector('#modal').classList.add('active');
    catName = name;
  }

  const CancelButton = () => {
    document.querySelector('#modal').classList.remove('active');
  }

  const ConfirmDeleteButton = async () => {
    try {
      await dispatch(deleteCategoryByName(catName));
      dispatch(showCategories())
      document.querySelector('#modal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateCategoryButton = (e) => {
    // console.log(object);
    e.preventDefault()
    let arg = {
      action: e.target.name,
      category: {
        id: -1,
        name: ''
      }
    }
    history.push({
      pathname: '/admin/categories/createeditcategory',
      search: '?query=abc',
      state: { detail: arg }
    })
  }

  const handleShowEditCategory = (category, e) => {
    // console.log('handleShowEditCategory(44):: category: ', category);
    // console.log('handleShowEditCategory(45):: e.target.name: ', e.target.name);
    let arg = {
      action: e.target.name,
      category
    }

    history.push({
      pathname: '/admin/categories/createeditcategory',
      search: '?query=abc',
      state: { detail: arg }
    })
  }

  return (
    <Container>
      <TopContainer>
        <div></div>
        <button 
          name="crear"
          onClick={handleCreateCategoryButton}>Crear Categoría</button>      
      </TopContainer>
      <Products>
        <Title>
          <h3>Total: {categories.length}</h3>
          <h3>Nombre</h3>
          <h3>Descripción</h3>
          <h3>ID</h3>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (categories?.length !== 0
          ? categories?.map(category => (
              <Product key={category.id}>
                <img src="https://icongr.am/entypo/clipboard.svg?size=128&color=75BA93" alt="example"/>
                <span>{category.name}</span>
                <span>{category.details}</span>
                <p>{category.id}</p>
                <div></div>
                <button 
                  name="ver"
                  onClick={(e) => handleShowEditCategory(category, e)}>Ver</button>
                <button 
                  name="editar"
                  onClick={(e) => handleShowEditCategory(category, e)}>Editar</button>
                <button onClick={() => DeleteButton(category.name)}>Borrar</button>
              </Product>
            ))
          : <h1>No hay categorias</h1>
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

export default CategoriesManagement
