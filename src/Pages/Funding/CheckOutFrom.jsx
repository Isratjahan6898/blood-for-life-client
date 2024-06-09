
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement, Elements, useElements, useStripe} from '../../src';

// import '../styles/common.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutFrom = () => {

    const stripe = useStripe();
    const navigate= useNavigate()
    const elements = useElements();
    const [error, setError]= useState('')
    const [clientSecret,setClientSecret]= useState('')
    const[transationId, setTranscationId]=useState('')
    const[paymentAmount, setPaymetAmount]=useState('')
    const {user}= useAuth();
    const axiosCommon=useAxiosCommon();

    useEffect(()=>{
        const fetchClientSecret= async()=>{
            try{
                if(paymentAmount>0){
                    const{data}= await axiosCommon.post('/create-paymet-intent',{price:paymentAmount})
                    setClientSecret(data.clientSecret)
                    console.log(data.clientSecret);
                }
            }
            catch(error){
                console.log('error fetching client secret', error);
            }
        }
        fetchClientSecret();
    },[axiosCommon,paymentAmount])
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }

      const {paymentIntent, error:confirmError}=await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email,
                name:user?.displayName
            }
        }
      })

      if(confirmError){
        console.log('confirm error');
      }else{
        console.log(paymentIntent);
        // 
        if(paymentIntent.status === 'succeeded'){
            // console.log('transcationId', paymentIntent.id);
            setTranscationId(paymentIntent.id);

            const payment ={
                name:user?.displayName,
                email:user?.email,
                transationId:paymentIntent.id,
                price:paymentAmount,
                date:new Date()
            }

            const res= await  axiosCommon.post('/payment',payment);
            console.log('save indatabase', res);

            if(res.data?.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "thank you for giving fund",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/funding')
            }
         }
      }
    };
    return (
        <div>


            <div>
                <h1 className='text-center font-extrabold text-red-800 text-4xl my-[90px]'>Here Payment</h1>
            </div>
             <form className='mx-[350px]' onSubmit={handleSubmit}>
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

        <div className="form-control">
          <label className="label">
            <span className="label-text mx-auto font-bold">Please Enter Your Amount</span>
          </label>
          <input type="number" name='payment' id='paymentAmount' placeholder="enter your amount" className="input input-bordered"
          onChange={(e)=>setPaymetAmount(e.target.value)}
          required />
        </div>
     <div className='text-center'>
     <button className='btn bg-red-500 text-white my-[60px] ' type="submit" disabled={!stripe }>
        Pay
      </button>
     </div>
    </form>

    <p className='text-red-800 text-center'>{error}</p>
    {transationId && <p className='text-green-600 text-center'>Your TransactionId Is:{transationId}</p>}
        </div>
    );
};

export default CheckOutFrom;