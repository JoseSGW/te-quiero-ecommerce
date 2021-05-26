import { types } from "../types/types";

const initialState = {
  ingredients: []
}

export const loadingIngredients = (state = initialState, action) => {
  switch(action.type) {
    case types.loadingIng:
      return {
        ingredients: action.payload
      }
    default: 
      return state;
  }
}