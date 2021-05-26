import React, { useState } from "react";
import { removeFromWishlist, adjustWishlistQuantity } from "../../actions/wishlistActions";
import { useDispatch, useSelector } from "react-redux";
import {
    Imagen,
    SingleItem,
    Informacion,
    Texto,
    Botones,
} from "./WishlistItem.styled";
import DeleteIcon from '@material-ui/icons/Delete';

export default function WishlistItem({
    imageurl,
    name,
    description,
    price,
    quantity,
    id,
    total,
}) {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.products); 
    const [input, setInput] = useState(quantity);
    const {user} = useSelector(state => state.users)
   

    

    const removeHandler = () => {
        if (user && user.name !== null){     
            var userId = user.id  
            dispatch(removeFromWishlist(id, userId));
            
        } else {
            dispatch(removeFromWishlist(id, -1))
        }

    };

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustWishlistQuantity(id, e.target.value));
    };

    return (
        <SingleItem>

            <Informacion>
                <Imagen>
                    <img src={imageurl} />
                </Imagen>
                <Texto>
                    <h1>{name}</h1>
                    
                    <p>{description}</p>
                    <p>Precio: ${price}</p>
                </Texto>
            </Informacion>
            <Botones>
                 
                 <div><button onClick={removeHandler}><DeleteIcon/>Sacar de Favoritos</button></div> 
            </Botones>
        </SingleItem>
    );
}
