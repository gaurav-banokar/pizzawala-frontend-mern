import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { server } from "../../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

import "../../styles/app.scss";
import "./payment.scss";

const Payment = () => {
  const { total } = useSelector((state) => state.cart);

  const [clientSecret, setClientSecret] = useState("");

  const [keyData, setKeyData] = useState(""); // stripe publishable key

  const getPaymentData = async (total) => {
    try {
      const stripePubKey = await axios.get(`${server}/stripeApiKey`, {
        withCredentials: true,
      });

      setKeyData(loadStripe(stripePubKey.data.stripeApiKey));
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/create-payment-intent`,
        { total: total },
        {
          withCredentials: true,
        }
      );

      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentData(total);
  }, [total]);

  return (
    <section className="payment ">
      <div className="paymentSub ">
        <h2>Checkout Card</h2>
        {keyData && clientSecret && (
          <Elements stripe={keyData} options={{ clientSecret }}>
            <CheckOutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </section>
  );
};

export default Payment;
