import React from 'react'
import {useDispatch} from "react-redux"
import { closeModal } from '../features/Modal/ModalSlice'
import { clearCart } from '../features/Cart/CartSlice'
const Modal = () => {
    const dispatch = useDispatch()
  return (
    <div className='modal-container'>
        <div className = "modal">
            <h4>Remove all items from the Cart ?</h4>

            <div className='btn-container'>
                <button className = "confirm-btn btn" type='button' onClick={()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}>Confirm</button>
                <button className = "clear-btn btn" type='button' onClick ={()=>{
                    dispatch(closeModal())
                }}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal