import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import {
    Card,
    Etiquetas,
    Categories,
    Black,
    White,
    Green,
    Blue,
    Red,
    Yellow,
    Heart,
    CardContainer,
} from "./ProductCard.styles";
import { get_detail } from "../../actions/products";
import { addToCart } from "../../actions/shoppingActions";
import { addToWishlist } from "../../actions/wishlistActions";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { get_reviews } from "../../actions/reviewsActions";
import { store } from 'react-notifications-component';

export default function ProductCard({ name, price, color, category, img, id }) {
    let navigate = useHistory();
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products.products)
    const user = useSelector((state) => state.users.user);
    const cart = useSelector((state) => state.products.cart);

    // const notifyAdd = () => {
    //     toast.success("Producto agregado al carrito", {
    //         draggable: true,
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //     });
    // };
    function addFavorites(){
        if (user.id &&user && user.name !== null ) 
        {            
            // toast.info("Producto agregado a favoritos", {
            //     draggable: true,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     position: toast.POSITION.BOTTOM_RIGHT,
            // });
            var userId = user.id
            
            dispatch(addToWishlist(id, userId))
            store.addNotification({
                title: "Aviso!",
                message: "Producto añadido a favoritos",
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
        }
        else {
            store.addNotification({
                title: "Aviso!",
                message: "Producto añadido a favoritos",
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
            // toast.info("Producto agregado a favoritos", {
            //     draggable: true,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     position: toast.POSITION.BOTTOM_RIGHT,
            // });
            dispatch(addToWishlist(id, -1))
        }
    }
    useEffect(() => {
        
        
        
        products.map((el)=>{
         
            
             if (el.id===id && el.images && el.images[0]){
            
                 
            img= el.images[0].name;
        }
        
        }
        )
       
    }, [products])

    function handleDetail(e) {
        e.preventDefault();
        dispatch(get_detail(id));
        dispatch(get_reviews(id));
        navigate.push(`/product/detail/${id}`);
    }

    const addhandler = async () => {
        store.addNotification({
            title: "Aviso!",
            message: "Producto añadido al carrito",
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
        // toast.info("Producto agregado al carrito", {
        //     draggable: true,
        //     closeOnClick: true,
        //     pauseOnHover: false,
        //     position: toast.POSITION.BOTTOM_RIGHT,
        // });
        var userId = user.id;
        var productId = id;
        var quantity = 1;
        
        if (cart.find(e=>e.id==id)){
            quantity+=cart.find(e=>e.id==id).quantity            
        }
        dispatch(addToCart(userId, productId, quantity));
    };

    return (
        // <>
        <CardContainer>
            <Card>
                <Heart onClick={addFavorites}>
                    <span>
                        <FavoriteIcon />
                    </span>
                </Heart>
                <h2>{name}</h2>
                <img alt="imagen de Té" src={img} onClick={handleDetail} />
                <div>
                    <Categories>
                        {category?.map((cat) => {
                            return <Etiquetas key={cat.id}>{cat.name}</Etiquetas>;
                        })}
                    </Categories>

                    <p>Precio: ${price}</p>
                    <span>
                        <button onClick={addhandler}>
                            <ShoppingCartIcon />
                            Agregar al carrito
                        </button>
                        {color == "yellow" && <Yellow>Té Amarillo</Yellow>}
                        {color == "red" && <Red>Té Rojo</Red>}
                        {color == "blue" && <Blue>Té Azul</Blue>}
                        {color == "black" && <Black>Té Negro</Black>}
                        {color == "white" && <White>Té Blanco</White>}
                        {color == "green" && <Green>Té Verde</Green>}
                    </span>
                </div>
            </Card>
        {/* <ToastContainer
            position="top-right"
            transition={Bounce}
            draggable={false}
            autoClose={4000}
            pauseOnHover={false}
        /> */}
        </CardContainer>
        // </>
    );
}
