import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

import { store } from 'react-notifications-component';

export function showUsers() {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const response = await fetch("http://localhost:3001/users/allUser");
            const jsonData = await response.json();
            dispatch(setUsers(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
        }
    };
}

export const setUser = (name, id, admin) => {
    console.log(name, id, admin);
    return {
        type: types.setUser,
        payload: {
            id: id,
            name: name,
            admin: admin,
        },
    };
};

export const setOption = (option) => {
    return {
        type: types.setOption,
        payload: option,
    };
};
export const logOutUser = () => {
    localStorage.clear();
};

export const setUserReload = (user) => {
    return {
        type: types.ReloadUser,
        payload: user,
    };
};

export const setUsers = (users) => {
    return {
        type: types.loadUsers,
        payload: users,
    };
};

export const logout = () => {
    return async function (dispatch) {
        try {
            const response = await fetch("http://localhost:3001/auth/logout");
            console.log("Estoy en el logout");
            dispatch(logOutUser());
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteUserById = (id) => {
    return async () => {
        try {
            const resp = await fetch(
                `http://localhost:3001/users/deleteUser?id=${id}`,
                {
                    method: "DELETE",
                }
            );
        } catch (error) {
            console.log("fail delete user: ", error);
        }
    };
};

export const adminToUser = (body) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/users/adminToUser`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
            store.addNotification({
                title: "Aviso!",
                message: "Cambio de rol de usuario exitoso",
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
            alert('Rol de usuario no actualizado');
            console.log(error.message);
        }
    };
};
export const userPromote = (body) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/users/userPromote`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
            store.addNotification({
                title: "Aviso!",
                message: "Cambio de rol de usuario exitoso",
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
            alert('Rol de usuario no actualizado');
            console.log(error.message);
        }
    };
};

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "https://restcountries.eu/rest/v2/all"
            );
            const jsonData = await response.json();
            console.log(jsonData);
            return dispatch({
                type: types.getAllCountries,
                payload: jsonData,
            });
            //setOption(e.target.value)
        } catch (err) {
            console.log(err);
        }
    };
};

export const forceResetPassword = (body) => {
    return async () => {
        try {
            const response = await fetch(`http://localhost:3001/users/modifyUser`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
            store.addNotification({
              title: "Aviso!",
              message: "Se reseteo la contraseña del usuario exitosamente",
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
            console.log(error.message);
        }
    };
};
