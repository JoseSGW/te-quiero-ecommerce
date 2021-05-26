import { types } from "../types/types";
import {
  finishLoader,
  finishLoading,
  startLoader,
  startLoading,
} from "./loading";
import { imgUpload } from "../helpers/imgUpload";
import { showReviewModal } from "./showReviewModal";

import { store } from 'react-notifications-component';

const axios = require("axios");

export const startLoadingProducts = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const jsonData = await response.json();
      // console.log('products(11) jsondata: ', jsonData)
      dispatch(setProducts(jsonData));
      dispatch(finishLoading());
      // dispatch(showReviewModal(false))
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  };
};

export const setProducts = (products) => {
  return {
    type: types.prodLoad,
    payload: products,
  };
};

export function get_detail(id) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const jsonData = await res.json();

      dispatch(setProduct(jsonData[0]));
      dispatch(finishLoading());
    } catch (err) {
      console.log(err);
      dispatch(finishLoading());
    }
  };
}

export const setProduct = (product) => {
  return {
    type: types.GET_DETAIL,
    payload: product,
  };
};

export function searchProduct(keyword) {
  return async function (dispatch) {
    return await fetch(
      `http://localhost:3001/products/search/?keyword=${keyword}`,
      { credentials: "include" }
    )
      .then((response) => response.json())
      .then((product) => {
        dispatch({
          type: types.SEARCH,
          payload: product,
        });
      });
  };
}

export const cleanSearchProduct = () => {
  return {
    type: types.cleanSearch,
  };
};

export function loadFilteredProducts(filterOptions) {

    return function(dispatch) {

        return (
            axios
            .get(`http://localhost:3001/products/categories?&data=${JSON.stringify(filterOptions)}`)
            .then((res) => {
                // console.log("llega desde los filtros", res.data)
                dispatch(setProducts(res.data));
                dispatch(finishLoading());
            })
            .catch((err) => {
                console.log(err);
                dispatch(finishLoading());
            })
        );
    };

}

export const deleteProductById = (id) => {
  return async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/products/deleteProduct/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct = (data) => {
  return async(dispatch) => {
      try {
          const response = await fetch('http://localhost:3001/products/modifyProduct', {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data)
          });
          dispatch({ type: types.prodUpdate });
          store.addNotification({
              title: "Aviso!",
              message: "Producto actualizado correctamente",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
              duration: 3000,
              onScreen: true
              }
          });
          dispatch({ type: types.prodImgClear });
      } catch (error) {
          alert('Producto no actualizado');
          console.log(error.message);
    }
  };
};

export const startUploadingImg = (file, indice) => {
  return async (dispatch) => {
    dispatch(startLoader());
    try {
      const imgUrl = await imgUpload(file);
      await dispatch(updateProductState(imgUrl, indice));
      dispatch(finishLoader());
    } catch (error) {
      console.log(error);
      dispatch(finishLoader());
    }
  };
};
export const updateProductState = (imgUrl, indice) => {
  return {
    type: types.prodImgUpdate,
    payload: imgUrl,
    indice: indice,
  };
};

export const setImgsToImgsState = (imgs) => {

    let imgsState = []; { imgs && imgs.filter(img => imgsState.push(img.name)) };
    return (dispatch) => {
        dispatch({
            type: types.prodImgCharge,
            payload: imgsState
        })
    }
}

export const setUserFeaturedProductsActn = (data) => {
    console.log('setUserFeaturedProductsActn:: LOAD_USER_FEATURED_PRODUCTS will be executed')

    return {
        type: types.LOAD_USER_FEATURED_PRODUCTS,
        payload: data
    }
}

export function loadUserFeaturedProducts(userId) {
    return function(dispatch) {
        // console.log('loadUserFeaturedProducts:: voy a axios.get...')
        return (
            axios.get(`http://localhost:3001/orders/getUserCompleteOrdersRelatedProducts/${userId}`)
            .then((res) => {
                // console.log(`loadUserFeaturedProducts:: voy a setUserFeaturedProductsActn, data: ${res.data}`)
                dispatch(setUserFeaturedProductsActn(res.data));
            })
            .catch((err) => {
                console.log(`loadUserFeaturedProducts:: Error:  ${err}`)
            })
            .finally(() => console.log('loadUserFeaturedProducts:: listo!'))
        );
    };
}

export const clearUserFeaturedProductsActn = () => {

    return {
        type: types.CLEAR_USER_FEATURED_PRODUCTS,
    }
}

