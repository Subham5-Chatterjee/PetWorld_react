import React from 'react'

const CheckoutCartItems = ({cartItems}) => {
    const {title, quantity, price} = cartItems || [];
    const {sale} = price || [];
  return (
    <div className="d-flex justify-content-between p-details">
        <p className="">{title}</p>
        <span className=""> X {quantity}</span>
        <span className="product_price">${sale.toFixed(2)}</span>
    </div>
  )
}

export default CheckoutCartItems
