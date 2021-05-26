import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom, Slide, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContainer } from '../LoginScreen/LoginScreen.styles';
import { ForgotCard } from "./RecoverScreen.styles";
import { store } from 'react-notifications-component';

export default function RecoverScreen() {
    const [input, setInput] = useState({ email: "" });
    const { user } = useSelector((state) => state.users);
    const { push } = useHistory();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        // toast.success("Se ha enviado un email a tu correo", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        store.addNotification({
            title: "Aviso!",
            message: 'Te enviamos un email con instrucciones',
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

        const response = await axios.post(
            "http://localhost:3001/users/forgot",
            {
                email: input.email,
            }
        );
        if (response.status === 404) {
        } else {
            console.log(response.data);
            push("/password?id=" + response.data.id);
        }
    };

    return (
        <AuthContainer>
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
            <ForgotCard>
                <img onClick={()=>window.history.back()} src="https://dashboard-onsystem.netlify.app/static/media/back-arrow.9170bb64.svg" alt="arrow"/>
                <h2>¿Se te olvidó tu contraseña?</h2>
                <p>Por favor, introduce tu correo electrónico.<br/>Te enviaremos un email con instrucciones.</p>
                <input
                    name="email"
                    type="email"
                    placeholder="Ingresa tu Email"
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </ForgotCard>
        </AuthContainer>
    );
}
