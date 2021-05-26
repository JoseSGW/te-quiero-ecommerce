import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showCategories } from "../../actions/categories";
import { showIngredients } from "../../actions/ingredients";
import { addProd } from "../../actions/createProd";
import { ShowForm } from "./Form.styles";

function Form({ showCategories, addProd, categories, ingredients }) {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: [],
        ingredients: [],
        color: "",
    });

    const handleInputChange = (e) => {
        // Handle para name, price, description
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    let newCategory = ""; // Variable para guardar categoria creada
    let newCategories = []; // Array de categorias creadas
    console.log("category" + newCategory);
    console.log("categories" + newCategories);

    let categoryInputHandler = (e) => {
        // Aca se maneja el input de categoria para ir guardandola en newCategory
        newCategory = e.target.value;
    };

    let categoryAddHandler = (e) => {
        // Agregamos la categoria escrita y la concatenamos a las anterioremente creadas (con cada CREATE que le damos de categorias)
        e.preventDefault();
        newCategories = newCategories.concat(newCategory);
    };

    // Ingredientes, por el momento sin andar
    let newIngredient = null;
    let newIngredients = [];

    let ingredientInputHandler = (e) => {
        newIngredient = e.target.value;
    };

    const ingredientAddHandler = (e) => {
        e.preventDefault();
        newIngredients = newIngredients.concat(newIngredient);
    };

    const handleSelect = (e) => {
        let selected = [];
        for (let i = 0; i < e.target.options.length; i++) {
            if (e.target.options[i].selected === true) {
                selected.push(e.target.options[i].value);
            }
        }
        setData({
            ...data,
            category: selected,
        });
    };

    useEffect(() => {
        showCategories();
    }, []);

    const createProd = (data) => {
        // Ultimo paso: enviamos el producto. Solo debemos concatear previamente las categorias creadas con las existentes seleccionadas
        setData({
            ...data,
            category: data.category.concat(newCategories),
        });
        addProd(data);
    };

    return (
        <ShowForm>
            <form>
                <h1> Crear producto </h1>{" "}
                <div>
                    <label> Nombre </label>{" "}
                    <input name="name" onChange={(e) => handleInputChange(e)}>
                        {" "}
                    </input>{" "}
                </div>{" "}
                <div>
                    <label> Descripcion </label>{" "}
                    <textarea
                        onChange={(e) => handleInputChange(e)}
                        name="description"
                        rows="6"
                        cols="40"
                    ></textarea>{" "}
                </div>{" "}
                <div>
                    <label> Precio </label>{" "}
                    <input onChange={(e) => handleInputChange(e)} name="price">
                        {" "}
                    </input>{" "}
                </div>{" "}
                <div>
                    <label> Selecciona la Cateogoria </label>{" "}
                    <select onChange={handleSelect} name="categories" multiple>
                        {" "}
                        {categories.map((e) => {
                            return (
                                <option value={e.name} name={e.name}>
                                    {" "}
                                    {e.name}{" "}
                                </option>
                            );
                        })}{" "}
                    </select>{" "}
                </div>{" "}
                <div>
                    <label> Agrega categoria </label>{" "}
                    <input
                        onChange={(e) => categoryInputHandler(e)}
                        type="text"
                    />
                    <button onClick={(e) => categoryAddHandler(e)}>
                        {" "}
                        Agregar{" "}
                    </button>{" "}
                </div>{" "}
                <div>
                    {" "}
                    {newCategories.map((e) => {
                        return <button> {e.name} </button>;
                    })}{" "}
                </div>
                <div>
                    <label> Selecciona ingredientes </label>{" "}
                    <select onChange={handleSelect} name="ingredients" multiple>
                        {" "}
                        {ingredients.map((e) => {
                            return (
                                <option value={e.name} name={e.name}>
                                    {" "}
                                    {e.name}{" "}
                                </option>
                            );
                        })}{" "}
                    </select>{" "}
                </div>{" "}
                <div>
                    <label> Agrega ingrediente </label>{" "}
                    <input
                        onChange={(e) => ingredientInputHandler(e)}
                        type="text"
                    />
                    <button onClick={(e) => ingredientAddHandler(e)}>
                        {" "}
                        Agregar{" "}
                    </button>{" "}
                </div>{" "}
                <div>
                    {" "}
                    {newIngredients.map((e) => {
                        return <button> {e.name} </button>;
                    })}{" "}
                </div>
                <div>
                    <input type="file" name="images" />
                    <button> Agregar imagen </button>{" "}
                </div>{" "}
                <div>
                    <Link to={`/product/:id`}>
                        <button type="submit" onClick={() => createProd(data)}>
                            Crear producto{" "}
                        </button>{" "}
                    </Link>{" "}
                </div>{" "}
            </form>{" "}
        </ShowForm>
    );
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
        ingredients: state.ingredients.ingredients,
    };
}

export default connect(mapStateToProps, {
    addProd,
    showCategories,
})(Form);
