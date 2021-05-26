import React, { useEffect, useState } from "react";
import { CategoryFilterContainer, CategoryType, CategoryInput, FilteringElements} from './CategoryFilter.styles';
import { useSelector, useDispatch } from 'react-redux';
import { loadFilteredProducts, startLoadingProducts } from "../../actions/products";
import { useHistory, useLocation } from 'react-router-dom';


export default function CategoryFilter() { 
    const dispatch = useDispatch();
    const history = useHistory()
    const { search } = useLocation();
    
    const [selectedItems, setSelectedItems] = useState({
        categories: [],
        ingredients: [],
        colors: []
    });
    
    const [displayElements, setDisplayElements] = useState('content')
    
    let existingCategories = useSelector(state => state.categories.categories)
    let existingIngredients = useSelector(state => state.ingredients.ingredients)
    let existingColors = [
        {id: 1, name: 'blue'},
        {id: 2, name: 'yellow'},
        {id: 3, name: 'green'},
        {id: 4, name: 'red'},
        {id: 5, name: 'black'},
        {id: 6, name: 'white'}
    ]
    useEffect(() => {
        if(search.includes('?')){
            setDisplayElements('none')
        }
    }, [])
    
    function setFilterStrings(selectedItemsArr, e) {
        let newSelectedCategories = [...selectedItemsArr]
        if (newSelectedCategories === []) 
        newSelectedCategories.push({id: e.target.id, name: e.target.value})
        else {
            let index = newSelectedCategories.findIndex((item, index) => item.name === e.target.value)
            if (index !== -1)
            newSelectedCategories = 
            [...newSelectedCategories.slice(0, index), ...newSelectedCategories.slice(index + 1)]
            else
            newSelectedCategories.push({id: e.target.id, name: e.target.value})
        }
        return [...newSelectedCategories]
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
    
    function handleFilterClick(e){
        e.preventDefault();
        dispatch(loadFilteredProducts(selectedItems))
        
        setDisplayElements('none')
    }
    
    function handleShowFilteringElementsAgain() {
        history.push('/catalogue');
        dispatch(startLoadingProducts())
        setDisplayElements('content');
    }
    
    return (
        <CategoryFilterContainer>
            <FilteringElements display={displayElements}>
                <CategoryType>Color de Té</CategoryType>
                {existingColors && existingColors.map((val, i) => {
                    return ( // the next div eliminates de error of "every child should have a key"
                    <div key={i}>
                        {                
                            <label htmlFor={val.name}> 
                                <CategoryInput 
                                    id={val.id}
                                    name={val.name}
                                    value={val.name}
                                    type="checkbox" 
                                    onChange={handColorsCheckboxClick}
                                    />
                                {existingColors[i].name}
                            </label>
                        }
                        </div>
                    ) 
                })}  
                <CategoryType>Tipo de Té</CategoryType>
                {existingCategories && existingCategories.map((val, i) => {
                    return ( // the next div eliminates de error of "every child should have a key"
                        <div key={i}>
                        {                
                            <label htmlFor={val.name}> 
                                <CategoryInput 
                                    id={val.id}
                                    name={val.name}
                                    value={val.name}
                                    type="checkbox" 
                                    onChange={handleCategoriesCheckboxClick}
                                    />
                                {existingCategories[i].name}
                            </label>
                        }
                        </div>
                    ) 
                })}  
                <CategoryType>Ingredientes</CategoryType>
                {existingIngredients && existingIngredients.map((val, i) => {
                    return ( // the next div eliminates de error of "every child should have a key"
                        <div key={i}>
                        {                
                            <label htmlFor={val.name}> 
                                <CategoryInput 
                                    id={val.id}
                                    name={val.name}
                                    value={val.name}
                                    type="checkbox" 
                                    onChange={handleIngredientsCheckboxClick}
                                    />
                                {existingIngredients[i].name}
                            </label>
                        }
                        </div>
                    ) 
                })} 
                <button onClick={handleFilterClick}>Filtrar</button>
            </FilteringElements>
            <button onClick={handleShowFilteringElementsAgain}>Volver a todos</button>
        </CategoryFilterContainer> 
    );
}
