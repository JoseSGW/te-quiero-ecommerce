import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Container } from "./CheckOut.styled";

export default function CheckOut({ total, totalprice }) {
  let navigate = useHistory();
  const user = useSelector((state) => state.users.user);
  const cart = useSelector((state) => state.products.cart);

  const handleSave = () => {
    axios
      .post("http://localhost:3001/orders/addToOrder", {
        userId: user.id,
        products: cart,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const linkMp = () => {
    axios
      .post("http://localhost:3001/mercadopago/create_preference", {
        totalprice: totalprice,
      })
      .then((response) => {
        let linkpago = response;
        console.log(linkpago.data);
        //Se abre en la misma ventana
        window.location.href = linkpago.data;
        // Se abre en ventana emergente
        // window.open(
        //   linkpago.data,
        //   "_blank",
        //   `width=700,height=500,left=300,top=50`
        // );
      });
  };

  return (
    <Container>
      <h1>Resumen</h1>
      <h4>Articulos: {total}</h4>
      <h4>Precio Total: {totalprice}</h4>
      {/* <button onClick={() => navigate.push("/checkout")}>CheckOut</button> */}
      <button onClick={() => linkMp()}> CheckOut </button>
    </Container>
  );
}
