import React from 'react'
import {useSelector } from "react-redux"
import { CartItem } from '../CartItem/CartItem'

export const CartContainer = () => {
    const {amount, cartItems, total } = useSelector( (store) =>store.cart)

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
            <h4>total <span> $ {total} </span></h4>
            </div>
            <button className='btn clear-btn'>Clear Cart</button>
        </footer>
    </section>
    </>
  )
}
