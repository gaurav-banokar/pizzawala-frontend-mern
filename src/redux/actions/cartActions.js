import axios from "axios";
import { server } from "../store";

export const addToCart = (id,quantity) => async (dispatch,getState) => {

    try {
        
    dispatch({
        type:"addToCartRequest",
    })
    
    const { data } = await axios.get(`${server}/item/${id}`, { withCredentials:true})
   
    dispatch({
        type:"addToCartSuccess",
        payload:{
            id: data.item._id,
            name: data.item.itemName,
            price: data.item.itemPrice,
            image:data.item.itemImage.url,
            // image: data.item.itemImage[0],
            quantity,
        },       
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

    dispatch({
        type:"calculatePrice"
    })
    localStorage.setItem("subTotal",JSON.stringify(getState().cart.subTotal))
    localStorage.setItem("tax",JSON.stringify(getState().cart.tax))
    localStorage.setItem("shippingCharges",JSON.stringify(getState().cart.shippingCharges))
    localStorage.setItem("total",JSON.stringify(getState().cart.total))
   
}
catch(error) {
    dispatch({
        type:"addToCartFail",
        payload:error.response.data.message,
    })
}
}

