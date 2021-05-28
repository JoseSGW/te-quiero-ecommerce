import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

export function showIngredients() {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const response = await fetch("http://localhost:3001/ingredients/allIngredients", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await response.json();
            dispatch(setIngredients(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.error(error);
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
    return async () => {
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
    return async (dispatch) => {
        try {
            const rawResponse = await fetch('http://localhost:3001/ingredients/addIngredient', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ingredient)
            });

            dispatch(showIngredients());

        } catch (err) {
            console.error(err)
        }
    }
};

export const modifyIngredient = (endPointArgs) => {
    return async (dispatch) => {
        try {
            const rawResponse = await fetch('http://localhost:3001/ingredients/modifyIngredient', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endPointArgs)
            });
            dispatch(showIngredients());

        } catch (err) {
            console.error(err)
        }
    }
};