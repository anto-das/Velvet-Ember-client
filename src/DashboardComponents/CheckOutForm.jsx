import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaCreditCard, FaLock, FaCheckCircle, FaExclamationCircle, FaArrowRight } from "react-icons/fa";

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [transactionId, setTransactionId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Request server side for payment intent route
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || isProcessing) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setIsProcessing(true);
    setError('');

    const { error: methodError } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (methodError) {
      setError(methodError.message);
      setIsProcessing(false);
      return;
    }

    // Confirm payment
    const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymous',
          email: user?.email || 'anonymous'
        }
      },
    });

    if (paymentError) {
      setError(paymentError.message);
      setIsProcessing(false);
      return;
    } else {
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        // Save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(),
          transactionId: paymentIntent.id,
          cartIds: cart.map(item => item._id),
          menuIds: cart.map(item => item.menuId),
          foodName: cart.map(item => item.name),
          status: 'pending'
        };

        try {
          const { data } = await axiosSecure.post('/payments', payment);
          if (data?.paymentResult?.insertedId && data?.deleteResult?.deletedCount) {
            toast.success('Thank you for paying us!');
            refetch();
          }
        } catch (dbError) {
          console.error("Database tracking error", dbError);
        } finally {
          setIsProcessing(false);
        }
      }
    }
  };

  return (
    <div className="w-full">
      {/* If Transaction is successful, show a clean, high-utility success panel */}
      {transactionId ? (
        <div className="text-center p-6 space-y-5 animate-[fadeIn_0.4s_ease-out]">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <FaCheckCircle className="text-3xl animate-[bounce_1s_infinite]" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Payment Succeeded!</h3>
            <p className="text-xs text-slate-400 mt-1">Your transactional authentication log tokens generated safely.</p>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 max-w-sm mx-auto text-left font-mono text-[11px] text-slate-600 space-y-1">
            <p className="flex justify-between">
              <span className="font-bold text-slate-400">AMOUNT:</span>
              <span className="font-black text-slate-900">${totalPrice.toFixed(2)}</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <span className="font-bold text-slate-400">TXID:</span>
              <span className="font-semibold text-slate-800 break-all text-right">{transactionId}</span>
            </p>
          </div>

          <div className="pt-2 max-w-sm mx-auto">
            <Link to={'/dashboard/payment-history'}>
              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-[0.98] group">
                <span>View Payment History</span>
                <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* The Card Input Interactive Form Panel */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Credit / Debit Card
            </label>
            
            {/* The customized safe wrapper container around Stripe element */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 transition-all duration-300 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-500/5">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '15px',
                      color: '#1e293b', // Tailwind slate-800 color map value
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSmoothing: 'antialiased',
                      '::placeholder': {
                        color: '#94a3b8', // Tailwind slate-400 map matching value
                      },
                    },
                    invalid: {
                      color: '#ef4444', // Tailwind red-500 matching metric track
                      iconColor: '#ef4444'
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Inline Action Processing Errors Trigger */}
          {error && (
            <div className="flex items-start gap-2 text-xs font-semibold text-red-500 bg-red-50 border border-red-100 rounded-xl p-3 animate-[shake_0.3s_ease-in-out]">
              <FaExclamationCircle className="text-sm mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Golden Velvet Core Call To Action Pay Submit Trigger Button */}
          <div className="pt-2">
            <button 
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] disabled:shadow-none transition-all duration-300 transform active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed"
              type="submit" 
              disabled={!stripe || !clientSecret || isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Authorizing Transaction...</span>
                </>
              ) : (
                <>
                  <FaLock className="text-[10px]" />
                  <span>Authorize & Pay ${totalPrice.toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckOutForm;
