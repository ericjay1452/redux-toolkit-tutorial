import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const url = `https://course-api.com/react-useReducer-cart-project`

const initialState = {
    amount : 10,
    cartItems : [],
    total : 0,
    isLoading : true,
}




const CartSlice = createSlice( {
    name : "cart",
    initialState,
    reducers: {
        clearCart : (state) =>{
            state.cartItems = []
        },
        removeItem : (state, {payload}) =>{
            const Itemid = payload;
            state.cartItems = state.cartItems.filter( (item)=> item.id !==Itemid)
        },
        increase : (state, {payload}) =>{
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : (state, {payload}) =>{
            const cartItem = state.cartItems.find( (item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotal : (state) =>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) =>{
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }
})


export const {clearCart, removeItem, increase, decrease, calculateTotal} = CartSlice.actions

console.log(CartSlice)

export default CartSlice.reducer