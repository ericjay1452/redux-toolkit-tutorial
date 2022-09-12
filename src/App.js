import React, {useEffect} from 'react'
import { CartContainer } from './components/CartContainer/CartContainer'
import Navbar from './components/Navbar/Navbar'
import {useSelector, useDispatch} from "react-redux"
import { calculateTotal } from './features/Cart/CartSlice'

const App = () => {
  const dispatch = useDispatch()

  const {cartItems} = useSelector( (store) => store.cart)
  useEffect( () =>{
     dispatch(calculateTotal())
  },[cartItems])
  return (
    <main>
    <Navbar />
    <CartContainer />
    </main>
  )
}

export default App