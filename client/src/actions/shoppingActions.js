import { types } from "../types/types";
import axios from 'axios';

export const cartFromBack = (userId) => {
    return function (dispatch){
        axios.get(`http://localhost:3001/orders?userId=${userId}&status=Open`)
        .then((res)=>{
            const products = []
            res.data[0]&& res.data[0].products&& res.data[0].products.map(e=>{
                products.push({
                    id: e.id,
                    name: e.name,
                    images: e.images,
                    quantity: e.order_details.quantity,
                    key: e.id,
                    price: e.price,
                    stock: e.stock,
                })
            })
            dispatch(productsToCart(products))
        })
    }
}

export const productsToCart = (products)=>{
    return {
        type: types.CART_FROM_BACK,
        payload: products
    }
}



export const addToCart = (userId, productId, quantity) => {
    return function (dispatch) {
        if (userId && userId!=null){
            console.log("posteo una orden")
        return axios.post('http://localhost:3001/orders/addToOrder', {
                userId: userId,
                products: [{id: Number(productId),
                    quantity: Number(quantity)
                }]
        })
            .then((res) => {
            // console.log(res.data.msg);
            // axios.get(`http://localhost:3001/orders/order/${res.data.orderId}`)
            //     .then((res2)=>{
            dispatch(addToProductReducer(productId, quantity))
                // })
        })
            .catch((err) => {
            console.log(err);
        })
    }  else {
        dispatch(addToProductReducer(productId, quantity))
    }
}
}

export const removeItemDB = (userId, productId) =>{
    return function (dispatch) {
        return axios.post('http://localhost:3001/orders/deleteItem', {
            userId: userId,
            productId: productId
        })
        
    }
}

export const addToProductReducer = (productId, quantity)=>{
    return {
         type: types.ADD_TO_CART,
                payload: {
                    productId,
                    quantity
    }

}}


export const reloadCart = (cart)=>{
    return {
        type: types.RELOAD_CART,
        payload: cart
    }
}

export const removeAll= ()=>{
    return {
        type: types.CART_REMOVE_ALL,
        payload: []
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        },
    };
};

export const adjustQuantity = (itemId, value) => {
    return {
        type: types.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: types.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

export const fullCart= (userId)=>{
    return function (dispatch) {
        return axios.get(`http://localhost:3001/orders/${userId}`)
        .then((res)=>{
            if (res.data[0]){
            console.log("rdo", res.data[0].products)



            dispatch(reloadCart(res.data[0].products))}
        })

    }
} 
