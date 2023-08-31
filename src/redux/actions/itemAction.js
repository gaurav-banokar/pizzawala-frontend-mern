

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
export const getAllItemsByCategoryAction = (category) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllItemsByCategoryRequest",
        })

        const config = {
            withCredentials: true,   
        };

        const { data } = await axios.get(`${server}/getAllItemsByCategory?category=${category}`, config);
          
        dispatch({
            type: "getAllItemsByCategorySuccess",
            payload: data.items,
        })

    } catch (error) {

        dispatch({
            type: "getAllItemsByCategoryFail",
            payload: error.response.data.message,
        })
    }
}
export const getAllItemsAction = (category) => async (dispatch) => {

    try {
        dispatch({
            type: "itemsByCategoryRequest",
        })

        const config = {
            withCredentials: true,
           
        };


        const { data } = await axios.get(`${server}/getAllItemsByCategory?category=${category}`,config);

        switch (category) {
            case "vegPizza":
                dispatch({
                    type: "vegPizzaItemsSuccess",
                    payload: data.items,
                })
                break;
            case "nonVegPizza":
                dispatch({
                    type: "nonVegPizzaItemsSuccess",
                    payload: data.items,
                })
                break;
            case "pizzaMania":
                dispatch({
                    type: "pizzaManiaItemsSuccess",
                    payload: data.items,
                })
                break;
            case "sideAndBeverages":
                dispatch({
                    type: "sideAndBeveragesItemsSuccess",
                    payload: data.items,
                })
                break;
            case "pasta":
                dispatch({
                    type: "pastaItemsSuccess",
                    payload: data.items,
                })
                break;
        
            default:
                break;
        }
      

    } catch (error) {

        dispatch({
            type: "itemsByCategoryFail",
            payload: error.response.data.message,
        })
    }
}

export const getAllItemsBySearchAction = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllItemsBySearchRequest",
        })

        const config = {
            withCredentials: true,   
        };

        const { data } = await axios.get(`${server}/getAllItemsBySearch?keyword=${keyword}`, config);
          
        dispatch({
            type: "getAllItemsBySearchSuccess",
            payload: data.items,
        })

    } catch (error) {

        dispatch({
            type: "getAllItemsBySearchFail",
            payload: error.response.data.message,
        })
    }
}