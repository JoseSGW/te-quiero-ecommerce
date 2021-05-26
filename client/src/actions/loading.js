import { types } from '../types/types';

export const startLoading = () => {
  return {
    type: types.startLoading
  }
}
export const finishLoading = () => {
  return {
    type: types.finishLoading
  }
}

export const startLoader = () => {
  return {
    type: types.startLoader
  }
}
export const finishLoader = () => {
  return {
    type: types.finishLoader
  }
}