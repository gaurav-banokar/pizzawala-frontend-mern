import React from 'react';
import { Link } from "react-router-dom";

import "./ordersNotFound.scss";

const OrdersNotFound = () => {
  return (
    <div className='ordersNotFound'>
        <h1>Orders Not Found</h1>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default OrdersNotFound