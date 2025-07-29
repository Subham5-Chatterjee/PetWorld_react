import React from 'react'

const PaymentMethod = ({handlePaymentMethodChange, selectedPaymentMethod, pmntMethod}) => {
  return (
    <div className="form-check mb-3">
        <input 
            onChange={handlePaymentMethodChange} 
            className="form-check-input" 
            type="radio" 
            name={'payment'} 
            id={pmntMethod?.id} 
            value={pmntMethod?.id} 
            checked={selectedPaymentMethod === pmntMethod?.id} 
        />
        <label className="form-check-label ps-3" htmlFor={pmntMethod?.id}>
            {pmntMethod?.description}
        </label>
    </div>
  )
}

export default PaymentMethod
