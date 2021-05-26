import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import { Container, ContainerFlex, ContainerList } from "./Cart.styled";
import CheckOut from "../CheckOut/CheckOut";

export default function Cart() {
    const cart = useSelector((state) => state.products.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart &&
            cart.forEach((item) => {
                items += item.quantity;
                price += item.quantity * item.price;
            });
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    //useEffect para el get de order para renderizar en el carrito, que la dependencia sea el carrito de redux

    return (
        <Container>
            <ContainerList>
                {cart?.map((item) => {
                    return (
                        <CartItem
                            id={item.id}
                            name={item.name}
                            image={item.images&&item.images[0].name}
                            quantity={item.quantity}
                            key={item.id}
                            total={totalItems}
                            totalprice={totalPrice}
                            price={item.price}
                            stock={item.stock}
                        />
                    );
                })}
            </ContainerList>
            <ContainerFlex>
                <CheckOut total={totalItems} totalprice={totalPrice} />
            </ContainerFlex>
        </Container>
    );
}
