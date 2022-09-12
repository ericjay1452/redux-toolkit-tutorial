import React from 'react'
import {FaChevronUp, FaChevronDown} from "react-icons/fa"
import {useDispatch} from "react-redux"
import { removeItem, increase, decrease} from '../../features/Cart/CartSlice'

export const CartItem = ({img, amount,price, title, id}) => {
    const dispatch = useDispatch()

  return (
    <article className='cart-item'>
        <img src={img} alt = {title}/>
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'> ${price}</h4>
            <button className='remove-btn' onClick = {()=>dispatch(removeItem(id))}>remove</button>
        </div>

        <div>
            <button className='amount-btn' onClick={()=>{dispatch(increase({id}))}}>
                <FaChevronUp />
            </button>
          <p>{amount}</p>

            <button className='amount-btn' onClick={()=>{
                // setting the button inactive when its get to 1
                if(amount === 1) {
                    return;
                }
                dispatch(decrease({id}))}}>
                <FaChevronDown />
            </button>
        </div>
    </article>
  )
}
