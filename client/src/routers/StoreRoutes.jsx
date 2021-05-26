import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../Components/About/About";
import Cart from "../Components/Cart/Cart";
import Catalogue from "../Components/Catalogue/Catalogue";
import CreateNewUser from "../Components/CreateUser/CreateUser";
import Footer from "../Components/Footer/Footer";
import Form from "../Components/Form/Form";
import Login from "../Components/Login/Login";
import Nav from "../Components/Nav-Bar/Nav";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import Forgot from "../Components/Forgot/Forgot";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Home from "../Pages/Home/Home";
import Succes from "../Components/Confirmacion";
import Wishlist from "../Components/Wishlist/Wishlist";
import CheckOutDetail from "../Components/CheckOut/CheckOutDetail";
import Logout from "../Components/Logout";
import AccountScreen from "../Pages/AccountScreen/AccountScreen";
import twoFactorAuth from "../Components/2FA/twoFactorAuth";

const StoreRoutes = () => {
    return (
        <>
            <Nav />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/catalogue" component={Catalogue} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/form" component={Form} />
                    {/* <Route exact path="/Login" component={Login} /> */}
                    <Route exact path="/logout" component={Logout} />
                    {/* <Route exact path="/create" component={CreateNewUser} /> */}
                    <Route exact path="/create/succes" component={Succes} />
                    <Route exact path="/Cart" component={Cart} />
                    <Route
                        exact
                        path="/password/:token/:id"
                        render={({ match }) => (
                            <ResetPassword
                                token={match.params.token}
                                id={match.params.id}
                            />
                        )}
                    />
                    <Route path="/forgot" component={Forgot} />
                    <Route exact path="/Wishlist" component={Wishlist} />
                    <Route path="/checkout" component={CheckOutDetail} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/account" component={AccountScreen} />
                    <Route
                        exact
                        path="/twoFactorAuth"
                        component={twoFactorAuth}
                    />

                    <Route
                        exact
                        path="/product/detail/:id"
                        render={({ match }) => (
                            <ProductDetail
                                key={match.params.id}
                                id={match.params.id}
                            />
                        )}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
            <Footer />
        </>
    );
};

export default StoreRoutes;
