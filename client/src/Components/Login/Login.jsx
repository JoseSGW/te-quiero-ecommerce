import React, { useState, useEffect } from "react";
import {
    DisabledButton,
    LoginForm,
    ErrorsSpan,
    NoAccount,
    Out,
} from "./Login.styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../../actions/users";
import { useDispatch } from "react-redux";
import Fondo from "../../img/Fondo.png";
import {getAllWishes} from "../../actions/wishlistActions"

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "Debe completar su usuario",
        password: "Debe completar su contraseña",
    });
    const [data, setData] = useState("");
    const [warning, setWarning] = useState("");

    function validate(input) {
        let errors = {
            username: "",
            password: "",
        };
        if (!input.username) {
            errors.username = "Debe escribir su usuario";
        }
        if (!input.password) {
            errors.password = "Debe escribir su contraseña";
        }
        if (input.password && input.password.length < 6) {
            errors.password = "Su contraseña debe tener al menos 6 carácteres";
        }

        if (
            errors.username.length > 0 ||
            errors.password == "Debe escribir su contraseña"
        ) {
            errors.sendError = "Debe completar los campos";
        }
        if (
            errors.password ==
                "Su contraseña debe tener al menos 6 carácteres" &&
            errors.username.length === 0
        ) {
            errors.sendError = "Su contraseña debe tener al menos 6 carácteres";
        }
        return errors;
    }

    function handleInputChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function methodLogin(e) {
        e.preventDefault();


        axios({
            method: "post",
            data: {
                username: input.username,
                password: input.password,
            },
            withCredentials: true,
            url: "http://localhost:3001/auth/login",
        }).then((res) => {
            
            setData(res)});
    }

        useEffect(()=>{
           if (data.data){
                  console.log(data.data)
               if (data.data.msg=== "Successfully Authenticated"){
                   var id= data.data.id;
                   var name= data.data.name
                   var admin= data.data.admin
                
                   
                   dispatch(setUser(name,id, admin))
                   
                   getAllWishes(id)
                    history.push("/")
                   
                }else {
                    var val=data.data.msg
                   setWarning(val)
                   
                }
           }
        }, [data])

    function showSubmitButton() {
        if (errors.username.length > 0 || errors.password.length > 0)
            return (
                <DisabledButton type="submit" disabled>
                    Ingresar
                </DisabledButton>
            );

        return (
            <button type="submit" onClick={methodLogin}>
                {" "}
                Ingresar
            </button>
        );
    }
    function showUsernameErrors() {
        if (errors.username == "Debe escribir su usuario") {
            return <ErrorsSpan>Debe escribir su usuario</ErrorsSpan>;
        }
    }
    function showPasswordErrors() {
        if (
            errors.password.length > 0 &&
            errors.password !== "Debe completar su contraseña"
        ) {
            return <ErrorsSpan>{errors.password}</ErrorsSpan>;
        }
    }
    function handleCreate(e) {
        e.preventDefault();
        history.push("/create");
    }
    return (
        <Out>
            <LoginForm>
                <img alt="Té" src={Fondo} />
                <div>
                    <form>
                        <h2>Bienvenidos</h2>

                        <div>
                            <label>Username</label>
                            <input
                                name="username"
                                placeholder="Henry123"
                                value={input.username}
                                onChange={handleInputChange}
                                type="text"
                            ></input>
                            {showUsernameErrors()}
                            <label>Contraseña</label>
                            <input
                                name="password"
                                value={input.password}
                                onChange={handleInputChange}
                                type="password"
                            ></input>
                            {showPasswordErrors()}
                        </div>

                        {showSubmitButton()}
                        {<p>{warning}</p>}
                        <NoAccount>
                            {" "}
                            <p>¿No tienes Cuenta?</p>{" "}
                            <button onClick={handleCreate}>CREAR CUENTA</button>
                        </NoAccount>
                        <NoAccount>
                            {" "}
                            <p>¿olvidaste tu contrasena?</p>{" "}
                            <button onClick={() => history.push("/forgot")}>
                                Recuperar contrasena
                            </button>
                        </NoAccount>
                    </form>
                </div>
            </LoginForm>
        </Out>
    );
}
