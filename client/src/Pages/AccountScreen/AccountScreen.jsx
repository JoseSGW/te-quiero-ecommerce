import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { startLoadingOrdersByUser } from "../../actions/orders";
import { clearUserFeaturedProductsActn } from "../../actions/products";
import { removeAll } from "../../actions/shoppingActions";
import { logout, setUser, setOption } from "../../actions/users";
import { removeAllWish } from "../../actions/wishlistActions";
import { Container } from "../../Components/ProductDetail/ProductDetail.styled";
import { ProductsContainer } from "../Admin/OrderByIdScreen/OrderByIdScreen.styles";
import { TopContainer } from "../Admin/ProductsManagement/ProductsManagement.styles";
import { OrdersContainer, Title, DateDiv } from "./AccountScreen.styles";

const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
};

const AccountScreen = () => {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.loading);
    const { user } = useSelector((state) => state.users);
    const { ordersByUserId: orders } = useSelector((state) => state.orders);

    useEffect(() => {
        {
            user.id && dispatch(startLoadingOrdersByUser(user.id));
        }
    }, [user]);

    function logoutFunction(e) {
        e.preventDefault();
        dispatch(logout());
        dispatch(setUser(null, null));
        dispatch(removeAll());
        dispatch(removeAllWish());
    }

    function logoutFunction(e) {
        e.preventDefault();
        dispatch(logout());
        dispatch(setUser(null, null));
        dispatch(removeAll());
        dispatch(removeAllWish());
        dispatch(clearUserFeaturedProductsActn());
    }

    const handleClick = () => {
        setChecked(!checked);
        dispatch(setOption(checked));
    };

    if (!user.id) return <Redirect to="/" />;

    return (
        <Container>
            <TopContainer>
                <h2>Mi cuenta</h2>
                <button onClick={logoutFunction}>Cerrar sesión</button>
            </TopContainer>
            {/* <h2>Activar autenticacion de 2 factores: </h2>
            <input type="checkbox" value={checked} onChange={handleClick} /> */}
            <h2>Mis compras</h2>
            {loading ? (
                <h1>Loading...</h1>
            ) : orders?.length !== 0 ? (
                orders?.map((order) => (
                    <OrdersContainer orders key={order.id}>
                        <Title>
                            {order.status === "InProcess" && (
                                <h2>
                                    Estado: <span>Procesando</span>
                                </h2>
                            )}
                            {order.status === "Open" && (
                                <h2>
                                    Estado: <span>Creada</span>
                                </h2>
                            )}
                            {order.status === "Cancelled" && (
                                <h2>
                                    Estado: <span>Cancelada</span>
                                </h2>
                            )}
                            {order.status === "Complete" && (
                                <h2>
                                    Estado: <span>Completada</span>
                                </h2>
                            )}
                            <DateDiv>
                                <h3>Fecha de creación:</h3>
                                <p>
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleDateString("es-ES", dateOptions)}
                                </p>
                            </DateDiv>
                        </Title>
                        {order.products.map((prod) => (
                            <ProductsContainer key={prod.id}>
                                <div>
                                    <h3>PRODUCTO: {prod.name}</h3>
                                    <Link to={`/product/detail/${prod.id}`}>
                                        Ver producto
                                    </Link>
                                </div>
                                <div>
                                    <div>
                                        <h3>PRECIO:</h3>
                                        <p>$ {prod.price}</p>
                                    </div>
                                    <div>
                                        <h3>CANTIDAD:</h3>
                                        <p>{prod.order_details.quantity}</p>
                                    </div>
                                </div>
                            </ProductsContainer>
                        ))}
                    </OrdersContainer>
                ))
            ) : (
                <ProductsContainer>
                    <p>No has realizado ningun pedido aún.</p>
                </ProductsContainer>
            )}
        </Container>
    );
};

export default AccountScreen;
