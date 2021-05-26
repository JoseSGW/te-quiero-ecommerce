import { types } from "../types/types";

const initialState = {
  stores: []
}

export const storesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.loadStores:
      return {
        stores: action.payload
      }
    default: 
      return state;
  }
}