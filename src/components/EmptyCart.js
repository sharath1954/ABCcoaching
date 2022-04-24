import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="empty-cart-main">
        <div className="container justify-content-center" style={{textAlign: 'center'}}>
            <h1>Your cart is empty!</h1>
            <p style={{fontSize: '20px'}}>Please select some courses to add to your cart <Link to='/'><a>here</a></Link>.</p>
        </div>
    </div>
  )
}
