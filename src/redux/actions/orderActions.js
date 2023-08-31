import axios from "axios";
import { server } from "../store.js"


export const createOrder = (
    shippingInfo,
    orderItems,
    paymentMethod,
    subTotal,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
    payment_id
) => async (dispatch) => {

    try {

        dispatch({
            type: "createOrderRequest",
        })

        const { data } = await axios.post(`${server}/createorder`,
            {
                shippingInfo,
                orderItems,
                paymentMethod,
                subTotal,
                taxPrice,
                shippingCharges,
                totalAmount,
                user,
                payment_id
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }

        );

        dispatch({
            type: "createOrderSuccess",
            payload: data.message,
        })


    } catch (error) {
        dispatch({
            type: "createOrderFail",
            payload: error.response.data.message,
        })
    }
}
export const createOrderOnline = (orderOptions) => async (dispatch) => {

    try {

        dispatch({
            type: "createOrderRequest",
        })

        const { data } = await axios.post(`${server}/createOrderOnline`, orderOptions,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }

        );

        dispatch({
            type: "createOrderSuccess",
            payload: data.message,
        })


    } catch (error) {
        dispatch({
            type: "createOrderFail",
            payload: error.response.data.message,
        })
    }
}

export const getMyOrders = (user) => async (dispatch) => {

    try {
        console.log("user_id",user)
        dispatch({ type: "getMyOrdersRequest" });

        const { data } = await axios.get(`${server}/myOrders?user=${user}`,  {
           
            withCredentials: true,
        });
        

        dispatch({ type: "getMyOrdersSuccess", payload: data.orders });

    } catch (error) {
        dispatch({ type: "getMyOrdersFail", payload: error.response.data.message });
    }


}
export const onlinePayment = (paymentData) => async (dispatch) => {

    try {

        dispatch({ type: "getOnlinePaymentRequest" });

        const { data } = await axios.get(`${server}/payment/process`, paymentData, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({ type: "getOnlinePaymentSuccess", payload: data.client_secret });

    } catch (error) {
        dispatch({ type: "getOnlinePaymentFail", payload: error.response.data.message });
    }


}

export const getOrderDetails = (id) => async (dispatch) => {
    try {
      
        dispatch({ type: "getOrderDetailsRequest" });

        const { data } = await axios.get(`${server}/myOrders/order?id=${id}`, {
            withCredentials: true,
        });

        dispatch({ type: "getOrderDetailsSuccess", payload: data.order });
    } catch (error) {
        dispatch({
            type: "getOrderDetailsFail",
            payload: error.response.data.message,
        });
    }
}