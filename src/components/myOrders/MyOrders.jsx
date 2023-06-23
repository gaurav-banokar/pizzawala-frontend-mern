import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/orderActions";
// import Loader from "../layout/Loader";
import toast from "react-hot-toast";

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
    console.log(user)
    dispatch(getMyOrders(user._id));
  }, [dispatch, error,navigate]);


  return (
    <section className="myOrders allSection">
      <div className="myOrders_container allSectionContainer">
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
                        <AiOutlineEye />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      </div>
    </section>
  );
};

export default MyOrders;
