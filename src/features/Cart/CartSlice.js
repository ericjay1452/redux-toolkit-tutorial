import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    amount : 10,
    cartItems : cartItems,
    total : 0,
    isLoading : true,
}

const CartSlice = createSlice( {
    name : "cart",
    initialState,
    reducers: {
        clearCart : (state) =>{
            state.cartItems = []
        }
    }
})


export const {clearCart } = CartSlice.actions

console.log(CartSlice)

export default CartSlice.reducer