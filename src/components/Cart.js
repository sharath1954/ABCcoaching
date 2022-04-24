import React from 'react'
import { useState, useEffect } from 'react'

import EmptyCart from './EmptyCart'
import CartItems from './CartItems'

export default function Cart() {

    const courses = sessionStorage.getItem('courses')
    const [msgToggle, setMsgToggle] = useState(false)

    useEffect(() =>{
        if(courses !== null){
            console.log(courses)
        }
        else if(courses === null || !sessionStorage.hasOwnProperty(courses)) {
            setMsgToggle(true)
        }
    }, [courses])

  return (
    <div className="cart-main">
        {msgToggle ? <EmptyCart /> : <CartItems />}
    </div>
  )
}
