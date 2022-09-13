import React from 'react'
import {useSelector, useDispatch } from "react-redux"
import { CartItem } from '../CartItem/CartItem'
import { clearCart } from '../../features/Cart/CartSlice'

export const CartContainer = () => {
    const {amount, cartItems, total } = useSelector( (store) =>store.cart)
    const dispatch = useDispatch()

  return (
    <>
    {!amount &&(
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
                <h4 className = "empty-cart">is Currently empty</h4>
            </header>
        </section>
    )}

{amount && (
    <section>
        <header>
            <h2>Your bag</h2>
        </header>

        <div>
            {cartItems.map( (item)=>{
             return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
            <h4>total <span> $ {total.toFixed(2)} </span></h4>
            </div>
            <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </footer>
    </section>
    )}
    </>
  )
}
