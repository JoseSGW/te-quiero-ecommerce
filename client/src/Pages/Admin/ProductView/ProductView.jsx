import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { showCategories } from '../../../actions/categories';
import { showIngredients } from '../../../actions/ingredients';
import { get_detail, setImgsToImgsState, startLoadingProducts, startUploadingImg, updateProduct } from '../../../actions/products';
import { Container, Form, ImgsContainer, Left, Loader, LoaderModal, Right, SelectorContainer } from './ProductView.styles';

// tea-ecommerce

const ProductView = () => {
  const navigate = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.loading);
  const { loader } = useSelector(state => state.loader);
  const { product, imgs } = useSelector(state => state.products);

  const [a, setA] = useState([])
  const [b, setB] = useState([])

  const { cart } = useSelector((state) => state.products);

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

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    images: [],
    categories: [],
    ingredients: [],
    color: "",
    price: 0,
  });


  const [selectedItems, setSelectedItems] = useState({
    categories: [],
    ingredients: [],
    colors: []
  });

  const [colorSelect, setcolorSelect] = useState('');

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
    b.pop();
    let items = [...selectedItems.categories, ...b]
    setB([]);
    if (e) {
      setSelectedItems({ 
        categories: [...setFilterStrings(items, e)],
        ingredients: [...selectedItems.ingredients],
        colors: [...selectedItems.colors]
      })  
    }
  }
  function handleIngredientsCheckboxClick(e) {
    a.pop();
    let items = [...selectedItems.ingredients, ...a]
    setA([]);
    if (e) {
        setSelectedItems({
            categories: [...selectedItems.categories],
            ingredients: [...setFilterStrings(items, e)],
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

  const handleInputChange = (e) => { // Handle para name, price, description
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(get_detail(parseInt(id)));
    dispatch(showCategories());
    dispatch(showIngredients());
    // checkkkk();
    setTimeout(() => {
      // setData({
      //   ...data,
      //   images: imgs
      // })
      {catRedux && document.getElementById('ch').click()};
      {ingRedux && document.getElementById('ch2').click()};
    }, 1100);
  }, []);
    
  useEffect(() => {
    // {(!product.id || product.id != id) && dispatch(get_detail(id))}
    // setTimeout(() => {
    setData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      categories: product.categories,
      ingredients: product.ingredients,
      images: product.images,
      color: product.color,
      price: product.price,
    })
    dispatch(setImgsToImgsState(product.images));
    // }, 100);
  }, [product]);
  
  useEffect(() => {
    setData({
      ...data,
      images: imgs
    })
  }, [imgs]);

  const handleSelect = (e) => {
    let selected = [];
    for (let i = 0; i < e.target.options.length; i++) {
      if (e.target.options[i].selected === true) {
        selected.push(e.target.options[i].value);
      }
    }
    setData({
      ...data,
      categories: selected,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id: id,
      cambios: {
        name: data.name,
        price: data.price,
        stock: data.stock,
        // color: selectedItems.colors[0],
        color: colorSelect? colorSelect : data.color,
        description: data.description
      },
      newCategories: selectedItems.categories,
      newCategories: selectedItems.ingredients,
      newImages: data.images,

      newStores: []
    };
    // console.log(body);
    await dispatch(updateProduct(body));
    await dispatch(startLoadingProducts());
    // await dispatch(get_detail(id));
    await navigate.push(`/product/detail/${id}`);
  };

  const handlePictureClick = (e, i) => {
    e.preventDefault();
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

  const checkkkk = (elems, redux, st, setST) => {
    const cas = document.getElementsByClassName(elems);
    for (let i = 0; i < cas.length; i++) {
      for (let j = 0; j < redux.length; j++) {
        if (cas[i].name === redux[j].name) {
          st.push(cas[i].name);
          setST([
            ...st,
            redux[j].name
          ])
          cas[i].checked = true;
        }
      }  
    }
  };

  const colorSelector = () => {
    const st = document.getElementById('colorSelector');
    const stSelect = st.options[st.selectedIndex].value;
    setcolorSelect(stSelect);
  }
  
  return (
    <Container>
      <h2>Formulario de edición de producto</h2>
      {loader &&
        <Loader>
          <LoaderModal>
            <img src="https://icongr.am/entypo/rocket.svg?size=128&color=75BA93" alt="loading"/>
            <p>Subiendo imagen...</p>
          </LoaderModal>
        </Loader>
      }
        <button id='ch' style={{display: 'none'}} onClick={()=>checkkkk('ingRedux', product.ingredients, a, setA)}>click</button>
        <button id='ch2' style={{display: 'none'}} onClick={()=>checkkkk('catRedux', product.categories, b, setB)}>click</button>
      {loading
      ? <h1>Loading...</h1>
      : <Form>
          <Left>
            <label>Nombre del producto:</label>
            <input type="text" value={data.name} name="name" onChange={(e) => handleInputChange(e)} />

             <label>Descripcion:</label>
             <textarea
              onChange={(e) => handleInputChange(e)}
              rows="6"
              cols="40"
              name="description"
              value={data.description}>
            </textarea>

            <label>Precio del producto:</label>
            <input type="number" value={data.price} name="price" onChange={(e) => handleInputChange(e)} />

            <label>Stock del producto:</label>
            <input type="number" value={data.stock} name="stock" onChange={(e) => handleInputChange(e)} />

            <label>Categorias:</label>
            <SelectorContainer>
              {catRedux && catRedux.map((cat, i)=> (
                <label key={cat.id}>
                  <input 
                    id={cat.name}
                    className='catRedux'
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
                    id={ing.name}
                    className='ingRedux'
                    name={ing.name}
                    value={ing.name}
                    type="checkbox" 
                    onChange={handleIngredientsCheckboxClick}
                  /> {ing.name}
                </label>
              ))}
            </SelectorContainer>

            <label>Color del producto:</label>
            <SelectorContainer>
              {/* <input type="text" value={data.color} name="color" onChange={(e) => handleInputChange(e)} /> */}
              <select id='colorSelector' name="colorSelector" onChange={colorSelector}>
                {/* <option value="null">...</option> */}
                <option value="blue" selected={(data.color === 'blue') && true}>Azul</option>
                <option value="yellow" selected={(data.color === 'yellow') && true}>Amarillo</option>
                <option value="green" selected={(data.color === 'green') && true}>Verde</option>
                <option value="red" selected={(data.color === 'red') && true}>Rojo</option>
                <option value="black" selected={(data.color === 'black') && true}>Negro</option>
                <option value="white" selected={(data.color === 'white') && true}>Blanco</option>
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
            <label>Sube imágenes del producto: (haz click en una imagen para editarla)</label>
            <ImgsContainer>
              {data.images?.length !== 0
                ? (<>
                    {data.images[0] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={data.images[0].name || data.images[0]} alt="img0"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector1')} src={defaultImg} alt="img0"/>}
                    <div>
                      {data.images[1] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={data.images[1].name || data.images[1]} alt="img1"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector2')} src={defaultImg} alt="img1"/>}
                      {data.images[2] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={data.images[2].name || data.images[2]} alt="img2"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector3')} src={defaultImg} alt="img2"/>}
                      {data.images[3] ? <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={data.images[3].name || data.images[3]} alt="img3"/> : <img onClick={(e)=>handlePictureClick(e,'#fileSelector4')} src={defaultImg} alt="img3"/>}
                    </div>
                  </>)
                : (<>
                    <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                    <div>
                      <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                      <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                      <img onClick={handlePictureClick} src={defaultImg} alt="img1"/>
                    </div>
                  </>)
              }
            </ImgsContainer>

             <button onClick={handleSubmit}>Actualizar Producto</button>
           </Right>
         </Form>
      }
    </Container>
  )
}

export default ProductView;