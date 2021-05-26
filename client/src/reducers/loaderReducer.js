import { types } from "../types/types";

const initialState = {
  loader: false
}

export const loaderReducer = (state = initialState, action) => {
  switch(action.type) {
      case types.startLoader:
        return {
        loader: true
      }
      case types.finishLoader:
        return {
        loader: false
      }

    default: 
      return state;
  }
}