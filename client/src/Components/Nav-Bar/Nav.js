import React, { useState, useEffect } from "react";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
// import Isotipo from "../../img/Isotipo.png";
import Isotipo from "../../img/Marca.png";
import { NavBar, SessionBar, Search, Categories, LogoContainer, NavContainer } from "./Nav.styles";
import SearchForm from "../SearchForm/SearchForm";
import { useHistory } from "react-router-dom";
import Marca from "../../img/Marca.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "../../actions/products";
import { showCategories } from "../../actions/categories";
import { showIngredients } from "../../actions/ingredients";
import { logout, setUser } from "../../actions/users";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {getAllWishes} from "../../actions/wishlistActions"
import { removeAllWish } from "../../actions/wishlistActions";
import { removeAll } from "../../actions/shoppingActions";


export default function Nav() {
    const dispatch = useDispatch();

    let navigate = useHistory();

    var { user, isLogged, isAdmin } = useSelector((state) => state.users);
    
    const handleSubmit = ({ keyword }) => {
        navigate.push(`/search/${keyword}`);
    };

    const handleClickOnA = (e) => {
        e.preventDefault();
        dispatch(startLoadingProducts());
        dispatch(showCategories());
        dispatch(showIngredients());
        navigate.push("/catalogue");
    };

    const cart = useSelector((state) => state.products.cart);
   const [cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))

    },[cart])

    useEffect(()=>{
        if (user){
                        
            localStorage.setItem("user", JSON.stringify(user))
        }
    },[user])

    
    useEffect(() => {
        let count = 0;
        cart &&
            cart.forEach((item) => {
                count += item.quantity;
            });
        setCartCount(count);
    }, [cart, cartCount]);
    
    const [wishCount, setWishCount] = useState(0);
    const wish = useSelector((state) => state.products.wish);
    const wishesQ = wish.length;
    const wishes = useSelector((state)=> state.products.wishes)

    useEffect(() => {
        if (!user || user.id==null){
           setWishCount(wishesQ)
        }
        else {
           dispatch(getAllWishes(user.id));
            setWishCount(wishes.length)
    }
       
}
    , [wish, wishCount,wishes.length, user, wishesQ]);

   function heartClick(e){
       e.preventDefault();
       dispatch(getAllWishes(user.id))
       navigate.push("/Wishlist")

   }


    function handleClick(e){
        e.preventDefault();
        dispatch(logout())    
        dispatch(setUser(null, null))
        dispatch(removeAll())
        dispatch(removeAllWish())
    }

    return (
        <NavContainer>
            <NavBar>
                <LogoContainer>
                    <img src={Isotipo} alt="logo de isotipo" onClick={() => navigate.push("/")} />
                </LogoContainer>
                <Search>
                    <SearchForm onSubmit={handleSubmit} />
                    <Categories>
                        {/* <span>
                            <MenuIcon />
                        </span> */}
                        <Link to="/">Home</Link>
                        <a onClick={handleClickOnA}>Catalogo</a>
                        <Link to="/about">About</Link>
                    </Categories>
                </Search>
                <SessionBar>
                    {(!user.name && <Link to="/auth/login"><Person /></Link>) ||
                            (user && <Link to='/account'>{user.name}</Link>)}
                    {(isLogged && isAdmin) && <Link to="/admin">Panel Admin</Link>}
                    <a onClick={heartClick}> <FavoriteIcon/>{wishCount}</a>
                    <Link to="/Cart"><ShoppingCartIcon /> {cartCount}</Link>
                </SessionBar>
            </NavBar>
        </NavContainer>
    );
}
