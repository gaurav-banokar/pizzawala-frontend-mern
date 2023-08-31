import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/orderActions";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

import "./myOrders.scss";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      toast.error("Login Required");
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders(user._id));
  }, [dispatch, error, navigate]);

  return (
    <section className="myOrders">
      {loading ? (
        <Loader />
      ) : orders ? (
        <div className="myOrdersContainer">
          <main>
            <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Status</th>
                  <th>Item Qty</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {orders &&
                  orders.map((i) => (
                    <tr key={i._id}>
                      <td>#{i._id}</td>
                      <td>{i.orderStatus}</td>
                      <td>
                        {i.orderItems.reduce((sum, curr) => {
                          return (sum = sum + Number(curr.quantity));
                        }, 0)}
                      </td>

                      <td>₹{i.totalAmount}</td>
                      <td>{i.paymentMethod}</td>
                      <td>
                        <Link to={`/myorders/order/${i._id}`}>
                          <AiOutlineEye color="red" />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </main>
        </div>
      ) : (
        navigate("/order/notFound")
      )}
    </section>
  );
};

export default MyOrders;
