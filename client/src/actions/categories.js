import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

export function showCategories() {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const response = await fetch("http://localhost:3001/categories/allCategories", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await response.json();
            dispatch(setCategories(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.error(error);
            dispatch(finishLoading());
        }
    };
}

export const setCategories = (categories) => {
    return {
        type: types.loadingCat,
        payload: categories,
    };
};

export const deleteCategoryByName = (name) => {
    return async () => {
        try {
            const res = await fetch(`http://localhost:3001/categories/deletedCategory/${name}`, {
                method: "DELETE",
            });
        } catch (err) {
            console.error(err)
        }
    }
}

export const newCategory = (category) => {
    return async (dispatch) => {
        try {

            const rawResponse = await fetch('http://localhost:3001/categories/addCategory', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });

            dispatch(showCategories());

        } catch (err) {


            console.error(err)
        }
    }
};

export const modifyCategory = (endPointArgs) => {
    return async (dispatch) => {
        try {
            const rawResponse = await fetch('http://localhost:3001/categories/modifyCategory', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endPointArgs)
            });
            dispatch(showCategories());

        } catch (err) {
            console.error(err)
        }
    }
};