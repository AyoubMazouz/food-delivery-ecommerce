// React Imports.
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartSize, setCartSize] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        if (loading) {
            const sub = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(sub);
        }
    }, [loading]);

    useEffect(() => {
        const ordersLs = localStorage.getItem("cart");
        if (ordersLs) {
            const temp = JSON.parse(ordersLs);
            setCartItems(temp);
            setCartSize(temp.length);
        }
    }, []);

    const addCartItem = (item) => {
        setLoading(true);
        item.order.id = item.item.id + Math.random();
        const temp = [...cartItems, item];
        setCartItems(temp);
        setCartSize(temp.length);
        localStorage.setItem("cart", JSON.stringify(temp));
    };

    const updateCartItem = (newItem) => {
        const temp = cartItems.map((item) => {
            if (item.order.id === newItem.order.id) {
                return newItem;
            }
            return item;
        });
        console.log(temp);
        setCartItems(temp);
        setCartSize(temp.length);
        localStorage.setItem("cart", JSON.stringify(temp));
    };

    const deleteCartItem = (id) => {
        const temp = cartItems.filter((item) => item.order.id !== id);
        localStorage.setItem("cart", JSON.stringify(temp));
        setCartItems(temp);
        setCartSize(temp.length);
    };

    const deleteCartItems = () => {
        localStorage.setItem("cart", "");
        setCartItems([]);
        setCartSize(0);
    };

    const value = {
        cartItems,
        cartSize,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        deleteCartItems,
        loading,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
