import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { removeFromCart, adjustQuantity, addToCart, removeItemDB } from "../../actions/shoppingActions";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
    Imagen,
    SingleItem,
    Informacion,
    Texto,
    Botones,
} from "./CartItem.styled";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem({ name, image, stock, price, quantity, id }) {
    const [input, setInput] = useState(quantity);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.products.cart);
    const user = useSelector((state) => state.users.user);

    const removeNotify = () => {
        dispatch(removeFromCart(id));
        if(user.id){
            dispatch(removeItemDB(user.id,id))
        }
        // toast.error("Producto removido del carrito", {
        //     draggable: true,
        //     position: toast.POSITION.BOTTOM_RIGHT,
        // });
    };
    const outOfStock=()=>{
        if (input==stock){
        return( <p> No hay más stock</p>)
        }
    }


    const onChangeHandler = (e) => {
        if (input>=1 && input<=stock 
            // && input<e.target.value
            ){
            setInput(e.target.value);
            var userId = user.id;
            var productId = id;
            var quantity = Number(e.target.value);
            if (quantity>=1){
               dispatch(addToCart(userId, productId, quantity))
            }
        }
        else if (input>=1 && input<=stock && input>e.target.value){
                setInput(input-1)
            }
        
        
    };
    return (
        <SingleItem>
            {/* <ToastContainer
                position="top-right"
                transition={Bounce}
                draggable={false}
                autoClose={4000}
            /> */}
            <Informacion>
                <Imagen>
                    <img src={image} />  
                </Imagen>
                <Texto>
                    <h1>{name}</h1>
                    <h2>Precio: {price}</h2>
                    <h2>cantidad: {quantity}</h2>
                </Texto>
            </Informacion>
            <Botones>
                {outOfStock()}
                <input
                    onKeyDown={(e) => {
                        e.preventDefault();
                      }}
                    type="number"
                    max={stock}
                    min="1"
                    name="quantity"
                    id="quantity"
                    value={input}
                    onChange={onChangeHandler}
                />
                <div>
                    <button onClick={removeNotify}>
                        <DeleteIcon />
                        Borrar
                    </button>
                </div>
            </Botones>
        </SingleItem>
    );
}
