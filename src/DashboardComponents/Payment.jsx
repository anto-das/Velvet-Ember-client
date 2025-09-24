import { loadStripe } from "@stripe/stripe-js";
import TitleBox from "../components/TitleBox";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <TitleBox title={'--Payment--'} heading={'Pay Your Bill'}></TitleBox>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;