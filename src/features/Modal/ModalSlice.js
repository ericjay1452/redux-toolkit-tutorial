import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
    
}

const ModalSlice = createSlice( {
    name : "modal",
    initialState,

    reducers : {
        closeModal : (state) =>{
            state.isOpen = false
        },

        openModal : (state) => {
            state.isOpen = true
        }
    }
})

export const {closeModal, openModal } = ModalSlice.actions

export default ModalSlice.reducer