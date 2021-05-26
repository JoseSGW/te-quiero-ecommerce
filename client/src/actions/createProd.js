import { types } from "../types/types";
import { store } from 'react-notifications-component';

const axios = require("axios");

export function addProd(data) {
    return function (dispatch) {
      return axios
        .post(`http://localhost:3001/products/addProduct`, data)
        .then((res) => {
          dispatch({ type: types.prodImgClear });
          store.addNotification({
            title: "Aviso!",
            message: "El producto se creo exitosamente",
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
          return res.data.json();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }