import React from 'react'
import {FaChevronUp, FaChevronDown} from "react-icons/fa"

export const CartItem = ({img, amount,price, title, id}) => {
  return (
    <article className='cart-item'>
        <img src={img} alt = {title}/>
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'> ${price}</h4>
            <button className='remove-btn'>remove</button>
        </div>

        <div>
            <button className='amount-btn'>
                <FaChevronUp />
            </button>
          <p>{amount}</p>
            <button className='amount-btn'>
                <FaChevronDown />
            </button>
        </div>
    </article>
  )
}
