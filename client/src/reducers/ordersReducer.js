import { types } from "../types/types";

const initialState = {
    orders: [],
    orderById: [],
    ordersByUserId: []
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getOrders:
          return {
            ...state,
            orders: action.payload
          }
        case types.getOrderById:
          return {
            ...state,
            orderById: action.payload
          }
        case types.getOrdersByUser:
          return {
            ...state,
            ordersByUserId: action.payload
          }
        default:
            return state;
    }
};
