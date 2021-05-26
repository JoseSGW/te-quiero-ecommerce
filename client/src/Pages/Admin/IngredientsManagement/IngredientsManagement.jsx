import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, TopContainer, Product, Products, Title, DeleteModal, Modal } from '../ProductsManagement/ProductsManagement.styles';
import { deleteIngredientByName, showIngredients } from '../../../actions/ingredients';

const IngredientsManagement = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(state => state.ingredients);
  const { loading } = useSelector(state => state.loading);
  const history = useHistory()
  // console.log('IngredientsManagement(12):: ingredients: ', ingredients);

  useEffect(() => {
    {ingredients.length === 0 && dispatch(showIngredients())}
  }, []);

  let IngName;
  const DeleteButton = (name) => {
    document.querySelector('#modal').classList.add('active');
    IngName = name;
  }

  const CancelButton = () => {
    document.querySelector('#modal').classList.remove('active');
  }

  const ConfirmDeleteButton = async () => {
    try {
      await dispatch(deleteIngredientByName(IngName));
      dispatch(showIngredients())
      document.querySelector('#modal').classList.remove('active');
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateIngredientButton = (e) => {
    // console.log(object);
    e.preventDefault()
    let arg = {
      action: e.target.name,
      ingredient: {
        id: -1,
        name: ''
      }
    }
  // console.log('handleCreateIngredientButton(47) e.target.name: ', e.target.name);
    history.push({
      pathname: '/admin/ingredients/createeditingredient',
      search: '?query=abc',
      state: { detail: arg }
    })
  }

  const handleShowEditIngredient = (ingredient, e) => {
    // console.log('handleShowEditIngredient(55):: ingredient: ', ingredient);
    // console.log('handleShowEditIngredient(56):: e.target.name: ', e.target.name);
    let arg = {
      action: e.target.name,
      ingredient
    }

    history.push({
      pathname: '/admin/ingredients/createeditingredient',
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
          onClick={handleCreateIngredientButton}>Crear Ingrediente</button>      
      </TopContainer>
      <Products>
        <Title>
          <h3>Total: {ingredients.length}</h3>
          <h3>Nombre</h3>
          <h3>Descripción</h3>
          <h3>ID</h3>
        </Title>
        {loading
        ? <h1>Loading...</h1>
        : (ingredients?.length !== 0
          ? ingredients?.map(ingredient => (
              <Product key={ingredient.id}>
                <img src="https://icongr.am/entypo/clipboard.svg?size=128&color=75BA93" alt="example"/>
                <span>{ingredient.name}</span>
                <span>{ingredient.details}</span>
                <p>{ingredient.id}</p>
                <div></div>
                <button 
                  name="ver"
                  onClick={(e) => handleShowEditIngredient(ingredient, e)}>Ver</button>
                <button 
                  name="editar"
                  onClick={(e) => handleShowEditIngredient(ingredient, e)}>Editar</button>
                <button onClick={() => DeleteButton(ingredient.name)}>Borrar</button>
              </Product>
            ))
          : <h1>No hay ingredientes</h1>
          )
        }
        <DeleteModal id='modal'>
          <Modal>
            <img src="https://icongr.am/entypo/warning.svg?size=128&color=FF0000" alt="alert"/>
            <h3>¿Estás Segur que quieres borrar este ingrediente?</h3>
            <button onClick={ConfirmDeleteButton}>Borrar</button>
            <button onClick={CancelButton}>Cancelar</button>
          </Modal>
        </DeleteModal>
      </Products>
    </Container>
  )
}

export default IngredientsManagement
