import { loadStripe } from "@stripe/stripe-js";
import TitleBox from "../components/TitleBox";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_payment_publishable_key}`);
const Payment = () => {
    return (
        <div>
            <TitleBox title={'--Payment--'} heading={'Pay Your Bill'}></TitleBox>
            <div className="max-w-11/14 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements> 
            </div>
        </div>
    );
};

export default Payment;