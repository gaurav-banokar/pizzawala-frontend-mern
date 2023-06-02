import React from "react";
import { useRef } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./checkOutForm.scss";
import { toast } from "react-hot-toast";
import { createOrderOnline } from "../../redux/actions/orderActions";

const CheckOutForm = ({ clientSecret }) => {
  const payBtn = useRef(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingInfo, shippingCharges, total } =
    useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.auth);
  // const { message, error } = useSelector((state) => state.order);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    payBtn.current.disabled = true;

    if (!stripe && !elements) {
      return;
    }
    try {
      
          const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
      
          switch (paymentIntent.status) {
            case "succeeded":
              toast.success("Payment Successful");
              navigate("/paymentsuccess");
              dispatch({ type: "emptyState" });
              break;
      
            case "canceled":
              toast.error("Payment Failed");
              payBtn.current.disabled = false;
              break;
      
            default:
              toast.loading("Pending...");
              break;
          }
          const payment_id = paymentIntent.id;
      
          const orderOptions = {
            shippingInfo,
            orderItems: cartItems,
            paymentMethod: "Online",
            subTotal,
            taxPrice: tax,
            shippingCharges,
            totalAmount: total,
            user,
            payment_id,
          };
      
          dispatch(createOrderOnline(orderOptions));
      
    } catch (error) {
      toast.error("Payment Failed")
      return new Error(error.message)
    }
  };

  return (
    <section className="checkOutForm">
      <form onSubmit={submitHandler}>
        <CardElement className="cardElement"/>
        <button type="submit" ref={payBtn}>
          Pay
        </button>
      </form>
    </section>
  );
};

export default CheckOutForm;
