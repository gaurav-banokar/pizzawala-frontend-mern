

import axios from "axios";
import { server } from "../store";


// Admin
export const createItemAction = (myForm) => async (dispatch) => {

    try {
      
        dispatch({
            type: "createItemRequest",

        })

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true,
        };


        const { data } = await axios.post(`${server}/admin/item/new`, myForm, config);


        dispatch({
            type: "createItemSuccess",
            payload: data.message,
        })

    } catch (error) {

        dispatch({
            type: "createItemFail",
            payload: error.response.data.message,
        })
    }
}
export const deleteItemAction = (myForm) => async (dispatch) => {

    try {
       
        dispatch({
            type: "deleteItemRequest",

        })

        const config = {
            withCredentials: true,
        };


        const { data } = await axios.post(`${server}/admin/item/new`,myForm, config);


        dispatch({
            type: "deleteItemSuccess",
            payload: data.message,
        })

    } catch (error) {

        dispatch({
            type: "deleteItemFail",
            payload: error.response.data.message,
        })
    }
}
export const getAllItemsAction = () => async (dispatch) => {

    try {
        dispatch({
            type: "getAllItemsRequest",

        })

        const config = {
            withCredentials: true,
        };


        const { data } = await axios.get(`${server}/getAllItems`, config);

        dispatch({
            type: "getAllItemsSuccess",
            payload: data.items,
        })

    } catch (error) {

        dispatch({
            type: "getAllItemsFail",
            payload: error.response.data.message,
        })
    }
}