import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";


const stripePromise =loadStripe(import.meta.env.VITE_PAYMET_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
               <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;