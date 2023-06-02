import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/orderActions";
import Loader from "../loader/Loader";

import "./orderDetails.scss";

const OrderDetails = () => {
  const params = useParams();

  const { eachOrder, loading } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="orderDetails">
      {loading === false && eachOrder.length !== 0 ? (
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {`${eachOrder.shippingInfo.hNo && eachOrder.shippingInfo.hNo } ${eachOrder.shippingInfo.city} ${eachOrder.shippingInfo.state} ${eachOrder.shippingInfo.country} ${eachOrder.shippingInfo.pinCode}`}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {eachOrder.user.name}
            </p>
            <p>
              <b>Phone</b>
              {eachOrder.shippingInfo.phoneNo}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {eachOrder.eachOrderStatus}
            </p>
            <p>
              <b>Placed At</b>
              { eachOrder.createdAt ? eachOrder.createdAt.split("T")[0]: "NA" }
            </p>
            <p>
              <b>Delivered At</b>
              {eachOrder.deliveredAt
                ? eachOrder.deliveredAt.split("T")[0]
                : "NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
              {eachOrder.paymentMethod}
            </p>
            <p>
              <b>Payment Reference</b>
              {eachOrder.paymentMethod === "Online"
                ? `#${eachOrder.paymentInfo}`
                : "NA"}
            </p>
            <p>
              <b>Paid At</b>
              {eachOrder.paymentMethod === "Online"
                ? eachOrder.paidAt && eachOrder.paidAt.split("T")[0]
                : "NA"}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>₹{eachOrder.subTotal}
            </p>
            <p>
              <b>Shipping Charges</b>₹{eachOrder.shippingCharges}
            </p>
            <p>
              <b>Tax</b>₹{eachOrder.taxPrice}
            </p>
            <p>
              <b>Total Amount</b>₹{eachOrder.totalAmount}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              {eachOrder.orderItems &&
                eachOrder.orderItems.map((i) => (
                  <div key={i._id}>
                    <h4>{i.name}</h4>
                    <span>{i.quantity}</span>x <span>{i.price}</span>
                  </div>
                ))}
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                ₹{eachOrder.totalAmount}
              </div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderDetails;
