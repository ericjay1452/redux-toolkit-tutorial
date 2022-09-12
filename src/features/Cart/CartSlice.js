import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    amount : 0,
    cartItems : cartItems,
    total : 0,
    isLoading : true,
}

const CartSlice = createSlice( {
    name : "cart",
    initialState
})

export default CartSlice.reducer