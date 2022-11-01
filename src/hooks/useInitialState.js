import React from "react";

const initialState ={
    cart: [],
}

export const useInitialState = () =>{
    const [state,setState] = React.useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) =>{
        const indexItem = state.cart.map(item => item.id).indexOf(payload);
        console.log(indexItem)
        state.cart.splice(indexItem,1);
        setState({
            ...state,
            cart: [...state.cart]
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
    }
}