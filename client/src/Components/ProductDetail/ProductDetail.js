import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { get_detail } from "../../actions/products";
import { addToCart } from "../../actions/shoppingActions";
import ReviewList from "../Review/ReviwList";
import { useHistory } from "react-router-dom";
import soldOut from "../../img/soldOut.svg";

import {
  Selector,
  Container,
  Informacion,
  Imagen,
  ContainerFlex,
  ImagesSelector,
  BigImg,
  ReviewModal,
} from "./ProductDetail.styled";
import ReviewForm from "../Review/ReviewForm";
import { get_reviews, showReviewModalActn } from "../../actions/reviewsActions";
import axios from "axios";
import { store } from 'react-notifications-component';

export default function ProductDetail() {
  const [bigImg, setBigImg] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const history = useHistory();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.users);

  const { cart } = useSelector((state) => state.products);
  const { showReviewModal } = useSelector((state) => state.reviews);
  const { ordersByUserId } = useSelector((state) => state.orders);

  const { reviews } = useSelector((state) => state.reviews);

  async function checkReviews() {
    axios
      .get(`http://localhost:3001/reviews/checkRevs/${user.id}/${product.id}`)
      .then((res) => {
        setDisableButton(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return disableButton;
  }

  useEffect(() => {
    product.id && checkReviews();
  }, [product, reviews]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (showReviewModal)
      document.querySelector("#modal").classList.add("active");
    else document.querySelector("#modal").classList.remove("active");
  }, [showReviewModal]);

  const prodId = history.location.pathname.slice(16);

  const notifyAdd = () => {
    store.addNotification({
      title: "Aviso!",
      message: 'Producto agregado al carrito',
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
    var userId = user.id;
    var productId = prodId;
    var quantity = 1;

    if (cart.find((e) => e.id == productId)) {
      quantity += cart.find((e) => e.id == productId).quantity;
    }
    dispatch(addToCart(userId, productId, quantity));
  };

  const initialURL =
    "https://gourmetdemexico.com.mx/wp-content/uploads/2016/01/MOOD-BrewedTeaWithSachets-_1_1024x1024-1024x888.jpg";

  useEffect(() => {
    dispatch(get_detail(parseInt(prodId)));
    dispatch(get_reviews(parseInt(prodId)));
  }, []);

  useEffect(() => {
    {
      product.images &&
        product.images.length !== 0 &&
        setBigImg(product.images[0].name);
    }
  }, [product]);

  function soldOutfunction() {
    if (product?.stock === 0) {
      return (
        <span>
          <img alt="sold out" src={soldOut}></img>
        </span>
      );
    }
    return <button onClick={notifyAdd}>Agregar al carrito</button>;
  }

  function handleAddReview() {
    dispatch(showReviewModalActn(true, false, null));
  }

  return (
    <div>
      <Container>
        <ContainerFlex>
          <div>
            <BigImg src={bigImg} alt="example" />
            <ImagesSelector>
              {product.images &&
                product.images.length !== 0 &&
                product.images.map((img) => (
                  <BigImg
                    small
                    key={img.id}
                    onClick={() => setBigImg(img.name)}
                    src={img.name}
                    alt="sss"
                  />
                ))}
            </ImagesSelector>
          </div>

          <Informacion>
            <h2>{product?.name}</h2>
            <p>Description: {product?.description}</p>
            <span>
              Precio: <p> ${product?.price}</p>
            </span>
            <span>
              Stock: <p> {product?.stock}</p>
            </span>
            {soldOutfunction()}
            <button disabled={disableButton} onClick={handleAddReview}>
              Agregar Revisión
            </button>
            {/* <ToastContainer
              position="top-right"
              transition={Bounce}
              draggable={false}
              autoClose={4000}
            /> */}
          </Informacion>
        </ContainerFlex>
      </Container>
      <ReviewModal id="modal">
        <ReviewForm />
      </ReviewModal>
      <ReviewList />
    </div>
  );
}