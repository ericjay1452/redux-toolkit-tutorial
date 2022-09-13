import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/Cart/CartSlice"
import ModalReducer from "./features/Modal/ModalSlice"

export const store = configureStore({
   reducer : {
     cart : CartReducer,
     Modal : ModalReducer
   },

})