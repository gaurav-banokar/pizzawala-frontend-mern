import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../redux/actions/orderActions.js";
import { useRef } from "react";

// scss importation
import "./confirmOrder.scss";
import Heading from "../../layout/heading/Heading.jsx";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placebtn = useRef(false);

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const { message, error } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    placebtn.current.disabled = true;

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total,
          user
        )
      );
    } else {
      navigate("/paymentprocess");
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      navigate("/paymentsuccess");
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
    }
    if (error) {
      toast.error(error);
      navigate("cart");
      dispatch({ type: "clearError" });
      dispatch({ type: "emptyState" });
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrderSection">
      <div>
        <Heading heading={"Confirm Order"} />
      </div>

      <main>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
              required
            />
          </div>
          <div>
            <label name= "payment">Online</label>
            <input
              type="radio"
              required
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
          </div>

          <button ref={placebtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
