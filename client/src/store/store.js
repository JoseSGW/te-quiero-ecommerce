import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "../reducers/categoriesReducer";
import { loadingIngredients } from "../reducers/loadingIngredients";
import { loadingReducer } from "../reducers/loadingReducer";
import { productsReducer } from "../reducers/productsReducer";
import { usersReducer } from "../reducers/usersReducer";
import { storesReducer } from "../reducers/storesReducer";
import { reviewsReducer } from "../reducers/ReviewsReducer";
import { loaderReducer } from '../reducers/loaderReducer';
import { statisticsReducer } from '../reducers/statisticsReducer'
import { ordersReducer } from '../reducers/ordersReducer';
import { FormHelperText } from "@material-ui/core";


const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
// const composeEnhancers = compose;

// function saveToLocalStorage(state) {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem("state", serializedState);
//     } catch (e) {
//         console.log(e);
//     }
// }


// function loadFromLocalStorage() {
//     try {
//         const serializedState = localStorage.getItem("state");
//         if (serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     } catch (e) {
//         console.log(e);
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const serializedState = localStorage.getItem("state");
//         if (serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     } catch (e) {
//         console.log(e);
//     }
//}

// const persistedState = loadFromLocalStorage();

const reducers = combineReducers({
    products: productsReducer,
    loading: loadingReducer,
    categories: categoriesReducer,
    ingredients: loadingIngredients,
    users: usersReducer,
    stores: storesReducer,
    reviews: reviewsReducer,
    loader: loaderReducer,
    orders: ordersReducer,
    statistics: statisticsReducer
});

export const store = createStore(
    reducers,
    // persistedState,
    composeEnhancers(applyMiddleware(thunk))
);
// console.log(store.getState())
// store.subscribe(() => saveToLocalStorage(store.getState()));
//persistedState,