import { configureStore } from "@reduxjs/toolkit";

import { createItemReducer, getAllItemsByCategoryReducers, getAllItemsBySearchReducer, itemsByCategoryReducers } from "../redux/reducers/itemReducers"
import { cartReducers } from "../redux/reducers/cartReducers"
import { orderReducers, ordersReducers } from "./reducers/orderReducers"
import { authReducer, getProfilePhotoReducer, uploadProfilePhotoReducer } from "./reducers/userReducers";
import { contactReducer } from "./reducers/contactReducers";



const store = configureStore({
    reducer: {
        item: createItemReducer,
        cart: cartReducers,
        order: orderReducers,
        orders: ordersReducers,
        auth: authReducer,
        profilePhoto:getProfilePhotoReducer,
        upload:uploadProfilePhotoReducer,
        itemsByCategory: getAllItemsByCategoryReducers,
        items: itemsByCategoryReducers,
        itemsBySearch: getAllItemsBySearchReducer,
        contact: contactReducer,
        
    }

})
export default store;
export const server = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;
