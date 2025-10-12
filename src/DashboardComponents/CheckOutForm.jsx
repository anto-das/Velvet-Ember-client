import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, } from "react-router-dom";
const CheckOutForm = () => {
  const [error,setError] = useState('');
  const [clientSecret,setClientSecret] = useState('');
  const [cart,refetch] =useCart();
  const axiosSecure = useAxiosSecure();
  const {user} =useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = cart.reduce((total,item) => total +item.price ,0)
  const [transactionId,setTransactionId] = useState('')

    // request server side for payment intent route
    useEffect(()=>{
      if(totalPrice>0){
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
      .then(res =>{
        setClientSecret(res.data.clientSecret)
      })
      }
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        });
        if(error){
            setError(error.message)
        } else{
            // console.log('stripe payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const {paymentIntent,error:paymentError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displayName || 'anonymous',
              email:user?.email || 'anonymouse'
            }
          },
        })
        if(paymentError){
          return
          // console.log("paymentError", paymentError)
        } else{ 
          // console.log("payment Intent",paymentIntent)
          if(paymentIntent.status ==='succeeded'){
            setTransactionId(paymentIntent.id)


            // now save the payment in the database
            const payment = {
              email: user.email,
              price: totalPrice,
              date: new Date(),
              transactionId: paymentIntent.id,
              cartIds: cart.map(item => item._id),
              menuIds: cart.map(item => item.menuId),
              foodName:cart.map(item => item.name),
              status:'pending'
            }

            const { data } = await axiosSecure.post('/payments',payment)
            if(data?.paymentResult?.insertedId && data?.deleteResult?.deletedCount){
              toast.success('Thank you for paying us!')
              refetch()
            }
          }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className="btn btn-sm bg-[#b58130] text-white my-8" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    {transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>}
    {transactionId && <Link to={'/dashboard/payment-history'}><button className="btn my-5 bg-[#b58130] text-white w-full">View Payment History</button></Link>}
        </form>
    );
};

export default CheckOutForm;