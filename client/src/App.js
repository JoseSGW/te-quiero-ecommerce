import React, { useEffect } from "react";
import { reloadCart } from "./actions/shoppingActions";
import { ThemeProvider } from "styled-components";
import { styles } from "./GlobalThemeConstants.js";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { setUserReload } from "./actions/users";

import { cartFromBack } from "./actions/shoppingActions";
import {
  loadUserFeaturedProducts,
  startLoadingProducts,
} from "./actions/products";

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  if (user !== null && user.id) {
    console.log("Ya hay un usuario");
    dispatch(setUserReload(user));
    dispatch(cartFromBack(user.id));
  }

  useEffect(() => {
    dispatch(startLoadingProducts());
    if (user && user.id) {
      dispatch(loadUserFeaturedProducts(user.id));
    }
  }, [user]);

  if (localStorage.getItem("cart")) {
    const cart = localStorage.getItem("cart");
    const cartObj = JSON.parse(cart);

    dispatch(reloadCart(cartObj));
  }

  return (
    <ThemeProvider theme={{ styles: styles }}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
