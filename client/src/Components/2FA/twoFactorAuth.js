import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ContainerFlex, Botones } from "./twoFactorAuth.styles";

export default function TwoFactorAuth() {
    const [qrCode, setQrCode] = useState("");
    const [token, setToken] = useState("");
    const [secretUrl, setSecretUrl] = useState("");

    useEffect(() => {
        const getSecret = async () => {
            const response = await axios.get(
                "http://localhost:3001/users/twoFactorAuth"
            );
            setQrCode(response.data.imgURL);
            setSecretUrl(response.data.secret.base32);
        };
        getSecret();
    }, []);

    const handleChange = (e) => {
        setToken(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users/verify", {
            token: token,
            secretURL: secretUrl,
        });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>¡Autenticacion de dos factores!</h1>
                <p>
                    Escanea el codigo QR con Google autenticator e introduce el
                    codigo!
                </p>
                <ContainerFlex>
                    <img alt="qr2FA" src={qrCode} />
                    <Botones>
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Ingresa el token"
                        />
                        <button onClick={handleSubmit}>Enviar</button>
                    </Botones>
                </ContainerFlex>
            </form>
        </Container>
    );
}
