 import React from 'react'; 
 import StripeCheckout from 'react-stripe-checkout';

 const StripeCheckoutButton = ({price}) => {
     const priceForStripe = price * 100; 
    const publishableKey = "pk_test_51IQ9eNA0Ckar5t4rBCccXwNKnNxHWDobx9lx3Rtu7aasOJB2u8wHtxDTcxcqKY3wHPHuqLufGOkrUuHBK7nIViX6002Emlu79p"

    const onToken = (token) =>{
         console.log(token)
         alert("Payment Successful")
    }

    return (
        <StripeCheckout
         label = "Pay Now"
         name = "Outstep Ltd."
         billingAddress
         shippingAddress
         description={`Your total is $${price}`}
         amount = {priceForStripe}
         panelLabel = "Pay Now"
         token={onToken}
         stripeKey={publishableKey}
        />
    )
 };

 export default StripeCheckoutButton