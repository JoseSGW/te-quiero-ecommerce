import { types } from "../types/types";

const initialState = {
    products: [],
    search: [],
    product: {},
    cart: [],
    imgs: [],
    wish: [],
    wishes: [],
    userFeaturedProducts: []
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.prodLoad:
            return {
                ...state,
                products: action.payload,
                search: [],
            };
        case types.prodImgUpdate:
            let newImgs = [...state.imgs];
            newImgs[action.indice] = action.payload;
            return {
                ...state,
                imgs: newImgs,
            };
        case types.prodImgCharge:
            return {
                ...state,
                imgs: action.payload,
            };
        case types.prodImgClear:
            return {
                ...state,
                imgs: [],
            };
        case types.SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        case types.cleanSearch:
            return {
                ...state,
                search: [],
            };

        case types.GET_DETAIL:
            return {
                ...state,
                product: action.payload,
            };

        case types.CART_FROM_BACK: //payload: [{id, quantity}]
            const products = action.payload
            console.log(products)
            return {
                ...state,
                cart: products
            }

        case types.ADD_TO_CART: //payload: {productId,quantity}
            const productId = action.payload.productId;
            const qty = action.payload.quantity;

            if (!state.cart.find(e => e.id == productId)) {
                const item = state.products.find(
                    (prod) => prod.id == productId
                );
                return {
                    ...state,
                    cart: [...state.cart, {...item, quantity: qty }]
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id == action.payload.productId ? {...item, quantity: qty } :
                        item
                    )
                }
            };

        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case types.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? {...item, quantity: +action.payload.quantity } :
                    item
                ),
            };

        case types.ADD_TO_WISHLIST:
            const wishItem = state.products.find(
                (prod) => prod.id === action.payload.id
            );
            var wishes = [];
            if (state.wish.length > 0) {
                wishes = state.wish.filter((item) => {
                    return item.id !== wishItem.id;
                });
            }
            wishes.push(wishItem);

            return {
                ...state,
                wish: wishes,
            };

        case types.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wish: state.wish.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case types.CART_REMOVE_ALL:
            return {
                ...state,
                cart: action.payload,
            };
        case types.WISHLIST_REMOVE_ALL:
            return {
                ...state,
                wish: action.payload
            }
        case types.ALL_WISHLIST:
            return {
                ...state,
                wishes: action.payload
            }

        case types.RELOAD_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case types.LOAD_USER_FEATURED_PRODUCTS:
            return {
                ...state,
                userFeaturedProducts: action.payload,
            };
        case types.CLEAR_USER_FEATURED_PRODUCTS:
            return {
                ...state,
                userFeaturedProducts: []
            };
        default:
            return state;
    }
};