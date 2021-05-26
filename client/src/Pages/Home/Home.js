import React, { useState } from "react";
import { SliderData } from "../../Components/ImageSlider/SliderData";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import {
  Ultimos,
  HomeFlex,
  Title,
  Card,
  Row,
  ImageInCard,
  MiniCards,
  MiniCard,
  Te,
  MiniCardImage,
  MiniCardSpan,
} from "./Home.styled";
import Verde from "../../img/te-verde.png";
import Azul from "../../img/te-azul.png";
import Negro from "../../img/te-negro.png";
import Amarillo from "../../img/te-amarillo.png";
import Rojo from "../../img/te-rojo.png";
import Blanco from "../../img/te-blanco.png";

import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  loadFilteredProducts,
  loadUserFeaturedProducts,
  setProduct,
  startLoadingProducts,
} from "../../actions/products";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  DeleteModal,
  Modal,
} from "../Admin/ProductsManagement/ProductsManagement.styles";
import { removeAll } from "../../actions/shoppingActions";

import axios from "axios";

import {
  startLoadingOrdersByUser,
  updateOrderById,
} from "../../actions/orders";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { store } from 'react-notifications-component';


export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();

  const [userFeaturedProductsArr, setUserFeaturedProductsArr] = useState([]);

  const { ordersByUserId } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.users);
  const { userFeaturedProducts, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  const goColor = (e, color) => {
    e.preventDefault();
    const selectedColor = {
      colors: [{ name: color }],
      ingredients: [],
      categories: [],
    };
    dispatch(loadFilteredProducts(selectedColor));
    history.push("/catalogue/?color=" + e.target.name);
  };

  const notificationMessage = (mensaje) => {
    store.addNotification({
      title: "Aviso!",
      message: mensaje,
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
  };


  useEffect(() => {
    dispatch(startLoadingProducts());
    user.id && dispatch(loadUserFeaturedProducts(user.id));
    setUserFeaturedProductsArr(userFeaturedProducts);
  }, [user, userFeaturedProducts.length]);

  const last = products.length - 1;

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  useEffect(() => {
    const openOrder =
      ordersByUserId[0] &&
      ordersByUserId.filter((ord) => ord.status === "Open");
    if (search.includes("in_process")) {
      const body = { status: "InProcess" };
      // document.querySelector("#MPStatus").classList.add("active");
      dispatch(removeAll());
      notificationMessage("Tu compra esta en proceso");
      setTimeout(() => {
        // document.querySelector("#MPStatus").classList.remove("active");
        {
          openOrder && dispatch(updateOrderById(openOrder[0].id, body));
        }
        history.replace("/");
      }, 3000);
    } else if (search.includes("approved")) {
      const body = { status: "Complete" };

      dispatch(removeAll());
      notificationMessage("Tu compra fue aprobada");
      setTimeout(() => {
        {
          openOrder && dispatch(updateOrderById(openOrder[0].id, body));
        }
        history.replace("/");
      }, 3000);
    } else if (search.includes("rejected")) {
      notificationMessage("Tu compra fue rechazada");
      setTimeout(() => {
        history.replace("/Cart");
      }, 3000);
    }
  }, [ordersByUserId]);

  const CancelButton = () => {
    document.querySelector("#MPStatus").classList.remove("active");
    history.replace("/");
  };

  const goToProductDetail = (prodId) => {
    history.push(`/product/detail/${prodId}`);
  };

  const showHoyQuieroOColores = () => {
    return (
      <Te>
        <Row>
          <Card name="green" id="3" onClick={(e) => goColor(e, "green")}>
            <img name="green" id="3" alt="Imagen de te" src={Verde}></img>
            <span name="green" id="3">
              Verde
            </span>
          </Card>
          <Card name="blue" id="1" onClick={(e) => goColor(e, "blue")}>
            <img name="blue" id="1" alt="Imagen de te" src={Azul}></img>
            <span name="blue" id="1">
              Azúl
            </span>
          </Card>
          <Card name="yellow" id="2" onClick={(e) => goColor(e, "yellow")}>
            <img name="yellow" id="2" alt="Imagen de te" src={Amarillo}></img>
            <span name="yellow" id="2">
              Amarillo
            </span>
          </Card>
          <Card name="black" id="5" onClick={(e) => goColor(e, "black")}>
            <img alt="Imagen de te" name="black" id="5" src={Negro}></img>
            <span name="black" id="5">
              Negro
            </span>
          </Card>
          <Card name="white" id="6" onClick={(e) => goColor(e, "white")}>
            <img name="white" id="6" alt="Imagen de te" src={Blanco}></img>
            <span name="white" id="6">
              Blanco
            </span>
          </Card>
          <Card name="red" id="4" onClick={(e) => goColor(e, "red")}>
            <img name="red" id="4" alt="Imagen de te" src={Rojo}></img>
            <span name="red" id="4">
              Rojo
            </span>
          </Card>
        </Row>
      </Te>
    );
  };

  return (
    <HomeFlex>
      <ImageSlider slides={SliderData} />

      <p></p>
      <Title>
        <h1>Hoy quiero...</h1>
      </Title>
      {showHoyQuieroOColores()}

      {userFeaturedProductsArr.length > 0 && (
        <Title>
          <h1>Recomendados para tí</h1>
        </Title>
      )}

      <MiniCards>
        {userFeaturedProductsArr.length > 0 &&
          userFeaturedProductsArr.map((p) => {
            if (p.stock !== 0) {
              return (
                <MiniCard onClick={() => goToProductDetail(p.id)}>
                  <img
                    name={p.name}
                    id={p.id}
                    alt={p.name}
                    src={p.images[0].name}
                  ></img>
                  <h2 name={p.name} id={p.id}>
                    {p.name}
                  </h2>
                </MiniCard>
              );
            }
          })}
      </MiniCards>
      <Title>
        <h1>Últimos agregados</h1>
      </Title>
      <Te>
        {products && products.length > 0 && products[last] && (
          <Row>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last].id}`)
              }
            >
              <img src={products[last].images[0].name}></img>
              <span>{products[last].name}</span>
            </Card>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last - 1].id}`)
              }
            >
              <img src={products[last - 1].images[0].name}></img>
              <span>{products[last - 1].name}</span>
            </Card>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last - 2].id}`)
              }
            >
              <img src={products[last - 2].images[0].name}></img>
              <span>{products[last - 2].name}</span>
            </Card>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last - 3].id}`)
              }
            >
              <img src={products[last - 3].images[0].name}></img>
              <span>{products[last - 3].name}</span>
            </Card>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last - 4].id}`)
              }
            >
              <img src={products[last - 4].images[0].name}></img>
              <span>{products[last - 4].name}</span>
            </Card>
            <Card
              onClick={(e) =>
                history.push(`/products/details/${products[last - 5].id}`)
              }
            >
              <img src={products[last - 5].images[0].name}></img>
              <span>{products[last - 5].name}</span>
            </Card>
          </Row>
        )}
      </Te>

      <DeleteModal id="MPStatus">
        <Modal mpModal>
          {search === "?status=approved" && (
            <>
              <img
                src="https://icongr.am/entypo/thumbs-up.svg?size=128&color=75BA93"
                alt="aprobado"
              />
              <h3>"Pago aprobado por Mercado Pago"</h3>{" "}
            </>
          )}
          {search === "?status=in_process" && (
            <>
              <img
                src="https://icongr.am/entypo/cycle.svg?size=128&color=FFB703"
                alt="pendiente"
              />
              <h3>"Pago pendiente por Mercado Pago"</h3>{" "}
            </>
          )}
          {search === "?status=rejected" && (
            <>
              <img
                src="https://icongr.am/entypo/circle-with-cross.svg?size=128&color=FF0000"
                alt="rechazado"
              />
              <h3>"Pago rechazado por Mercado Pago"</h3>{" "}
            </>
          )}
          {search !== "?status=rejected" && (
            <button onClick={CancelButton}>X</button>
          )}
        </Modal>
      </DeleteModal>
      {/* <ToastContainer
        position="top-right"
        transition={Bounce}
        draggable={false}
        autoClose={4000}
      /> */}
    </HomeFlex>
  );
}
