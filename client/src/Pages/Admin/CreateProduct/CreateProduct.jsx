import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { showCategories } from "../../../actions/categories";
import { addProd } from "../../../actions/createProd";
import { showIngredients } from "../../../actions/ingredients";
import { startLoadingProducts, startUploadingImg } from "../../../actions/products";
import { types } from "../../../types/types";
import { Container, Form, ImgsContainer, Left, Loader, LoaderModal, Right, SelectorContainer } from "../ProductView/ProductView.styles";

function CreateProduct() {
  const navigate = useHistory();
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    color: "",
    images: [],
    category: [],
    ingredients: [],
    stores: [],
  });

  const { loader } = useSelector(state => state.loader);
  const { imgs } = useSelector(state => state.products);
  const { categories:catRedux } = useSelector(state => state.categories);
  const { ingredients:ingRedux } = useSelector(state => state.ingredients);
  let colRedux = [
    {id: 1, name: 'blue'},
    {id: 2, name: 'yellow'},
    {id: 3, name: 'green'},
    {id: 4, name: 'red'},
    {id: 5, name: 'black'},
    {id: 6, name: 'white'}
  ]

  const [selectedItems, setSelectedItems] = useState({
    categories: [],
    ingredients: [],
    colors: []
  });

  const [colorSelect, setcolorSelect] = useState('null');

  function setFilterStrings(selectedItemsArr, e) {
    let newSelectedCategories = [...selectedItemsArr]
    if (newSelectedCategories === []) 
        newSelectedCategories.push(e.target.value)
    else {
        let index = newSelectedCategories.findIndex((item, index) => item === e.target.value)
        if (index !== -1)
            newSelectedCategories = 
                [...newSelectedCategories.slice(0, index), ...newSelectedCategories.slice(index + 1)]
        else
            newSelectedCategories.push(e.target.value)
    }
    return [...newSelectedCategories]
  }

  function handleCategoriesCheckboxClick(e) {
    if (e) {
        setSelectedItems({ 
            categories: [...setFilterStrings(selectedItems.categories, e)],
            ingredients: [...selectedItems.ingredients],
            colors: [...selectedItems.colors]
        })  
     }
  }
  function handleIngredientsCheckboxClick(e) {
    if (e) {
        setSelectedItems({
            categories: [...selectedItems.categories],
            ingredients: [...setFilterStrings(selectedItems.ingredients, e)],
            colors: [...selectedItems.colors]
        })           
    }
  }
  function handColorsCheckboxClick(e) {
    if (e) {
        setSelectedItems({
            colors: [...setFilterStrings(selectedItems.colors, e)],
            ingredients: [...selectedItems.ingredients],
            categories: [...selectedItems.categories]
        })  
     }
  }

  // Handle para name, price, description
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(showCategories());
    dispatch(showIngredients());
    dispatch({ type: types.prodImgClear });
  }, []);

  useEffect(() => {
    setData({
      ...data,
      images: imgs
    })
  }, [imgs])

  const createProd = async (e) => {
    e.preventDefault();
    const body = {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      images: data.images,
      stores: [],
      category: selectedItems.categories,
      ingredients: selectedItems.ingredients,
      color: colorSelect
      // color: selectedItems.colors[0],
    };
    // console.log(body);
    await dispatch(addProd(body));
    await dispatch(startLoadingProducts());
    await navigate.push(`/admin/products`);
  };

  // const handlePictureClick = (e) => {
  //   e.preventDefault();
  //   document.querySelector('#fileSelector').click();
  // }
  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   if(file) {
  //     await dispatch(startUploadingImg(file));
  //   }
  // }
  const handlePictureClick = (e, i) => {
    e.preventDefault();
    console.log(i);
    document.querySelector(i).click();
  }
  const handleFileChange1 = async (e) => {
    const file = e.target.files[0];
    if(file) {
      await dispatch(startUploadingImg(file, 0));
    }
  }
  const handleFileChange2 = async (e) => {
    const file = e.target.files[0];
    if(file) {
      await dispatch(startUploadingImg(file, 1));
    }
  }
  const handleFileChange3 = async (e) => {
    const file = e.target.files[0];
    if(file) {
      await dispatch(startUploadingImg(file, 2));
    }
  }
  const handleFileChange4 = async (e) => {
    const file = e.target.files[0];
    if(file) {
      await dispatch(startUploadingImg(file, 3));
    }
  }

  const defaultImg = "https://icongr.am/entypo/image-inverted.svg?size=128&color=c4c4c4";
  
  const colorSelector = () => {
    const st = document.getElementById('colorSelector');
    const stSelect = st.options[st.selectedIndex].value;
    setcolorSelect(stSelect);
  }

  return (
    <Container>
      {loader &&
        <Loader>
          <LoaderModal>
            <img src="https://icongr.am/entypo/rocket.svg?size=128&color=75BA93" alt="loading"/>
            <p>Subiendo imagen...</p>
          </LoaderModal>
        </Loader>
      }
      <h2>Crear producto</h2>
      <Form>
        <Left>
          <label>Nombre del producto:</label>
          <input name="name" onChange={(e) => handleInputChange(e)}/>

          <label>Descripcion:</label>
          <textarea
            onChange={(e) => handleInputChange(e)}
            name="description"
            rows="6"
            cols="40"
            />

          <label>Precio del producto:</label>
          <input type="number" onChange={(e) => handleInputChange(e)} name="price"/>

          <label>Stock del producto:</label>
          <input type="number" onChange={(e) => handleInputChange(e)} name="stock"/>

          <label>Categorias:</label>
          <SelectorContainer>
            {catRedux && catRedux.map((cat, i)=> (
              <label key={cat.id}>
                <input 
                  id="cbox1"
                  name={cat.name}
                  value={cat.name}
                  type="checkbox" 
                  onChange={handleCategoriesCheckboxClick}
                /> {cat.name}
              </label>
            ))}
          </SelectorContainer>

          <label>Ingredientes:</label>
          <SelectorContainer>
            {ingRedux && ingRedux.map((ing, i)=> (
              <label key={ing.id}>
                <input 
                  id="cbox1"
                  name={ing.name}
                  value={ing.name}
                  type="checkbox" 
                  onChange={handleIngredientsCheckboxClick}
                /> {ing.name}
              </label>
            ))}
          </SelectorContainer>

          <label>Color del producto:</label>
            {/* {colRedux && colRedux.map((col, i)=> (
              <label key={col.id}>
                <input 
                  id="cbox1"
                  name={col.name}
                  value={col.name}
                  type="checkbox" 
                  onChange={handColorsCheckboxClick}
                /> {col.name}
              </label>
            ))} */}
            <SelectorContainer>
              {/* <input type="text" value={data.color} name="color" onChange={(e) => handleInputChange(e)} /> */}
              <select id='colorSelector' name="colorSelector" onChange={colorSelector}>
                <option value="null" selected>...</option>
                <option value="blue">Azul</option>
                <option value="yellow">Amarillo</option>
                <option value="green">Verde</option>
                <option value="red">Rojo</option>
                <option value="black">Negro</option>
                <option value="white">Blanco</option>
              </select>
            </SelectorContainer>
        </Left>
        <Right>
          <input 
            id="fileSelector1"
            type="file" 
            name="images"
            style={{display: 'none'}}
            onChange={handleFileChange1}
          />
          <input 
            id="fileSelector2"
            type="file" 
            name="images"
            style={{display: 'none'}}
            onChange={handleFileChange2}
          />
          <input 
            id="fileSelector3"
            type="file" 
            name="images"
            style={{display: 'none'}}
            onChange={handleFileChange3}
          />
          <input 
            id="fileSelector4"
            type="file" 
            name="images"
            style={{display: 'none'}}
            onChange={handleFileChange4}
          />
          {/* <button onClick={handlePictureClick}>Subir imagen</button> */}

          <label>Sube imágenes del producto: (haz click en una imagen para editarla)</label>
          <ImgsContainer>
            {data.images.length !== 0
              ? (<>
                  {data.images[0] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={data.images[0].name || data.images[0]} alt="img0"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={defaultImg} alt="img0"/>}
                  <div>
                    {data.images[1] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={data.images[1].name || data.images[1]} alt="img1"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={defaultImg} alt="img1"/>}
                    {data.images[2] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={data.images[2].name || data.images[2]} alt="img2"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={defaultImg} alt="img2"/>}
                    {data.images[3] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={data.images[3].name || data.images[3]} alt="img3"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={defaultImg} alt="img3"/>}
                  </div>
                </>)
              : (<>
                  {data.images[0] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={data.images[0].name || data.images[0]} alt="img0"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={defaultImg} alt="img0"/>}
                  <div>
                    {data.images[1] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={data.images[1].name || data.images[1]} alt="img1"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={defaultImg} alt="img1"/>}
                    {data.images[2] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={data.images[2].name || data.images[2]} alt="img2"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={defaultImg} alt="img2"/>}
                    {data.images[3] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={data.images[3].name || data.images[3]} alt="img3"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={defaultImg} alt="img3"/>}
                  </div>
                  {/* <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                  <div>
                    <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                    <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                    <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                  </div> */}
                </>)
            }
          </ImgsContainer>

          <button type="submit" onClick={createProd} disabled={colorSelect === 'null' ? true : false}>Crear producto</button>
        </Right>
      </Form>
    </Container>
  );
}

export default CreateProduct;