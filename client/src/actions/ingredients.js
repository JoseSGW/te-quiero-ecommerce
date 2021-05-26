import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

export function showIngredients() {
    return async function(dispatch) {
        // console.log('showIngredients (6):: loading ingredients')
        dispatch(startLoading());
        try {
            const response = await fetch("http://localhost:3001/ingredients/allIngredients");
            const jsonData = await response.json();
            // console.log('showIngredients (11):: jsonData: ', jsonData)
            dispatch(setIngredients(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
        }
    };
}

export const setIngredients = (ingredients) => {
    return {
        type: types.loadingIng,
        payload: ingredients,
    };
};

export const deleteIngredientByName = (name) => {
    return async() => {
        try {
            const res = await fetch(`http://localhost:3001/ingredients/deletedIngredient/${name}`, {
                method: "DELETE",
            });
        } catch (err) {
            console.log(err)
        }
    }
}

export const newIngredient = (ingredient) => {
    return async(dispatch) => {
        try {
            // console.log('newIngredient(42):: ingredient: ', ingredient)
            const rawResponse = await fetch('http://localhost:3001/ingredients/addIngredient', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ingredient)
            });
            // console.log('newIngredient (51):: returned from fetch, rawResponse: ', rawResponse)
            dispatch(showIngredients());

        } catch (err) {
            // console.log('newIngredient (55):: error')

            console.log(err)
        }
    }
};

export const modifyIngredient = (endPointArgs) => {
    return async(dispatch) => {
        try {
            // console.log('modifyIngredient(65):: endPointArgs: ', endPointArgs)
            const rawResponse = await fetch('http://localhost:3001/ingredients/modifyIngredient', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endPointArgs)
            });
            // console.log('modifyIngredient (74):: returned from fetch')
            dispatch(showIngredients());

        } catch (err) {
            console.log(err)
        }
    }
};