import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { BoxContainer } from "./NewsLetter.styles";
import cuchara from '../../img/cuchara.png';
import { store } from 'react-notifications-component';

const NewsLetter = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    // Handle para name, price, description
    e.preventDefault();
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
    });
    setData({
      firstName: "",
      lastName: "",
      email: "",
    })
    store.addNotification({
      title: "Aviso!",
      message: "Te suscribiste al newsletter",
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
    // toast.info("Te has suscrito al newsletter", {
    //     draggable: true,
    //     position: toast.POSITION.TOP_RIGHT,
    // });
  };

  return (
    <>
      <BoxContainer>
        <form>
          <h2>Suscríbete a nuestro</h2>
          <h2>Newsletter</h2>
          <p>¡Te informaremos sobre las últimas Ofertas y Novedades que tenemos en Té Quiero para ti!</p>
          <input
              name="email"
              value={data.email}
              onChange={handleInputChange}
              placeholder="E-mail"
          />
          <button type="submit" onClick={handleSubmit}>Suscribirme</button>
        </form>
        <img src={cuchara} alt="cuchara"/>
      </BoxContainer>
      {/* <ToastContainer
          position="top-right"
          transition={Bounce}
          draggable={false}
          autoClose={4000}
      /> */}
    </>
  )
}

export default NewsLetter
