import React, { useEffect } from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import { products } from "./products";
import { reducer } from "./reducer";

//import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartContext = React.createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0
};

const Cart = () => {

    // const [item, setItem]= React.useState(products);
    const [state, dispatch] = React.useReducer(reducer, initialState);

    //to delete any item
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    //to clear cart or delete all the items in the cart
    const clearCart = () => {
        return dispatch({
            type: "CLEAR_CART"
        });

    };

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        });
    };

    //use the useEffect function to update the data
    useEffect(() => {
        dispatch({
            type: "GET_TOTAL"
        });
    }, [state.item]);

    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
                <ContextCart />
            </CartContext.Provider>


        </>
    );
};

export default Cart;