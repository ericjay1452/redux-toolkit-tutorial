import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount : 0,
    cartItems : [],
    total : 0,
    isLoading : true,
}

const CartSlice = createSlice( {
    name : "cart",
    initialState
})

export default CartSlice.reducer