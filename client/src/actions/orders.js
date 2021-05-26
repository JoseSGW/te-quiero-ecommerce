import { types } from "../types/types";
import {
  finishLoader,
  finishLoading,
  startLoader,
  startLoading,
} from "./loading";

import { store } from 'react-notifications-component';

export const startLoadingOrders = (status) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `http://localhost:3001/orders?status=${status}`
      );
      const jsonData = await response.json();
      // console.log('products(11) jsondata: ', jsonData)
      dispatch(setOrders(jsonData));
      dispatch(finishLoading());
    } catch (error) {
      // console.log(error);
      dispatch(finishLoading());
    }
  };
};

export const setOrders = (orders) => {
  return {
    type: types.getOrders,
    payload: orders,
  };
};

export const startLoadingOrderById = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`http://localhost:3001/orders/order/${id}`);
      const jsonData = await response.json();
      // console.log('products(11) jsondata: ', jsonData)
      dispatch(setOrderById(jsonData));
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  };
};

export const setOrderById = (order) => {
  return {
    type: types.getOrderById,
    payload: order,
  };
};

export const deleteOrderById = (id) => {
  return async (dispatch) => {
    dispatch(startLoader());
    try {
      // await fetch(`http://localhost:3001/orders/order/${id}`);
      dispatch(finishLoader());
    } catch (error) {
      console.log(error);
      dispatch(finishLoader());
    }
  };
};

export const updateOrderById = (id, body) => {
    return async(dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/orders/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            store.addNotification({
                title: "Aviso!",
                message: "Cambio de estado de orden exitoso",
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
        } catch (error) {
            alert('Producto no actualizado');
            console.log(error.message);
        }
    }
}

// Traigo el historial de ordenes de un usuario
export const startLoadingOrdersByUser = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `http://localhost:3001/orders/getUserOrders/${id}`
      );
      const jsonData = await response.json();
      dispatch(setUserOrders(jsonData));
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  };
};
export const setUserOrders = (orders) => {
  return {
    type: types.getOrdersByUser,
    payload: orders,
  };
};
