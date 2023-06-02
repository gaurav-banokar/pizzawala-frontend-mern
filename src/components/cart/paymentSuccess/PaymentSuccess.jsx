import React from 'react';
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

import "./paymentSuccess.scss";
// import { useEffect } from 'react';


const PaymentSuccess = () => {

 
  

  return (
   <section className="paymentSuccess">
     <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
   </section>
  )
}

export default PaymentSuccess