import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forceResetPassword } from "../../actions/users";
import { useHistory } from "react-router";
import { store } from 'react-notifications-component';
import { Card, Container } from "./ResetPassword.styles";

export default function ResetPassword({ token, id }) {
    const dispatch = useDispatch();
    const history= useHistory();
    const [input, setInput] = useState({ password: "", password2: "" });
    const [error, setError] = useState("");
    const { user } = useSelector((state) => state.users);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (input.password !== input.password2) {
            setError("Las contraseñas no coinciden");
        } else {
            setError(null);
        }
    }, [input, setError]);

    const handleSubmit = async (e) => {
        const body = {
            id: id,
            campo: 'resetPasswordForce',
            update: false
          }
        const handlePass = await axios
            .put(`http://localhost:3001/users/passwordReset/${token}`, {
                password: input.password,
                password2: input.password2,
            })
            .then((res) => {
                if (res.status === 204) {
                    setError("Token invalido o expirado");
                } else {
                    dispatch(forceResetPassword(body));
                    store.addNotification({
                        title: "Aviso!",
                        message: "Tu contraseña fue cambiada",
                        type: "success",
                        insert: "bottom",
                        container: "bottom-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                        duration: 3000,
                        onScreen: true
                        }
                    });
                    history.replace("/auth/login");
                }
            });
    };

    return (
        <Container>
            {/* {console.log(token)} */}
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <Card>
                <h3>Cambiar contraseña</h3>
                <label>Nueva Contraseña</label>
                <input
                    name="password"
                    type="password"
                    placeholder=""
                    onChange={handleChange}
                />
                <label>Repita su contraseña</label>
                <input
                    onChange={handleChange}
                    name="password2"
                    type="password"
                    placeholder=""
                />
                {!error && input.password ? (
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="Cambiar"
                    />
                ) : (
                    <p>{error}</p>
                )}
            </Card>
        </Container>
    );
}
