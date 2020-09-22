import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_51HTigHIQAiKGNVv8Vxbh4DDIE7hVM7q1td5pfCZ8t6LBpZLDqHfr1rF2Z5PHu22UDZvxMENN8g3mo3rd1brD7EJo00fmm7zc99');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
   await stripe.redirectToCheckout({
     sessionId: session.data.session.id
   });

  } catch(err) {
    console.log(err);
    showAlert('error', err);
  }
};
