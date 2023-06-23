import { configureStore } from "@reduxjs/toolkit";

import { createItemReducer, getAllItemsReducers } from "../redux/reducers/itemReducers"
import { cartReducers } from "../redux/reducers/cartReducers"
import { orderReducers, ordersReducers } from "./reducers/orderReducers"
import { authReducer } from "./reducers/userReducers";
import { contactReducer } from "./reducers/contactReducers";



const store = configureStore({
    reducer: {
        item: createItemReducer,
        cart: cartReducers,
        order: orderReducers,
        orders: ordersReducers,
        auth: authReducer,
        items: getAllItemsReducers,
        contact: contactReducer,

    }

})
export default store;
export const server =  `http://localhost:5000/api/v1`;