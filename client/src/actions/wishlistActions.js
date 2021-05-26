import { types } from "../types/types";
import axios from "axios"

export const addToWishlist = (itemId, userId) => {
       return async(dispatch, getState)=> {
        const wishArray = getState().products.wishes;
        console.log(wishArray)

        const element = wishArray.find(wish => itemId === wish.product_id)
            
        
         if (userId >= 0){
        
            const wish=  {
                productId: itemId, 
                userId: userId
            }
            return axios
              .post(`http://localhost:3001/wishlist/addWish`, wish)
              .then((res) => {
                  dispatch(addWish(itemId, userId))
                        
            })
              .catch((err) => {
                
              })
        } 
  
    else {
        
        dispatch({        
            type: types.ADD_TO_WISHLIST,
            payload: {
                id: itemId,
            }
        })
}
}}

export const addWish= (productId, userId)=>{
    return async(dispatch)=>{
       
        if (userId>=0){
    dispatch(getAllWishes(userId)) 
}
    
    return {        
        type: types.ADD_TO_WISHLIST,
        payload: {
            id: productId,
        }
}}}

export const getAllWishes = (userId)=>{
    var user=userId
    return async(dispatch)=> {
        return axios
           .get(`http://localhost:3001/wishlist/${userId}`)
           .then(res=>{
               dispatch(addWishes(res.data[0]))
            })
           //  
                    
       
     }
 
}





export const addWishes= (products)=>{
    console.log("esto va al reducer",products)
    return {        
        type: types.ALL_WISHLIST,
        payload:  products,
        
}}

export const removeFromWishlist = (itemId, userId)=>{
    return async(dispatch)=> {
        if (userId >= 0){
       
       const wish=  {
           productId: itemId, 
           userId: userId
       
   }
   const rawResponse = await fetch('http://localhost:3001/wishlist/deleteWish', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(wish)
            })
             
           dispatch(removeWish(itemId))
           dispatch(getAllWishes(userId))             
                    
       
     }
 
   else {
       dispatch(removeWish(itemId))
    
}
}

}


export const removeWish = (itemId) => {
    return {
        type: types.REMOVE_FROM_WISHLIST,
        payload: {
            id: itemId,
        },
    };
};

export const adjustWishlistQuantity = (itemId, value) => {

    return {
        type: types.ADJUST_WISHLIST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value,
        },
    };
};

export const removeAllWish= ()=>{
    return {
        type: types.WISHLIST_REMOVE_ALL,
        payload: []
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: types.LOAD_CURRENT_WISHLIST_ITEM,
        payload: item,
    };
};
