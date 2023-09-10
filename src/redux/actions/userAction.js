import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {

    try {

        dispatch({
            type: "loadUserRequest",
        })

        const { data } = await axios.get(`${server}/me`, { withCredentials: true })


        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })



    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message
        })
    }
}
export const uploadProfilePhoto = (form) => async (dispatch) => {

    try {
        console.log(form);
        dispatch({
            type: "uploadProfilePhotoRequest",
        })

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${server}/upload-profile-photo`,form, config)


        dispatch({
            type: "uploadProfilePhotoSuccess",
            payload: data.message
        })



    } catch (error) {
        dispatch({
            type: "uploadProfilePhotoFail",
            payload: error.response.data.message
        })
    }
}
export const getProfilePhoto = (userId) => async (dispatch) => {

    try {

        dispatch({
            type: "getProfilePhotoRequest",
        })

        const { data } = await axios.get(`${server}/profile-photo?user=${userId}`, { withCredentials: true })


        dispatch({
            type: "getProfilePhotoSuccess",
            payload: data.image
        })



    } catch (error) {
        dispatch({
            type: "getProfilePhotoFail",
            payload: error.response.data.message
        })
    }
}


export const logout = () => async (dispatch) => {
    try {

        dispatch({
            type: "logoutRequest",
        })

        await axios.get(`${server}/logout`, {
            withCredentials: true,
        })

        dispatch({
            type: "logoutSuccess",

        })

    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message
        })
    }
}

// Admin
export const getAdminUsersAction = () => async (dispatch) => {

    try {
        dispatch({
            type: "getAllUsersRequest"
        })



        const { data } = await axios.get(`${server}/getAdminUsers`, { withCredentials: true });

        dispatch({
            type: "getAllUsersSuccess",
            payload: data.users
        });

    } catch (error) {
        dispatch({
            type: "getAllUsersFail",
            payload: error.response.data.message
        })

    }
}
export const contactFormAction = ({ name, email, message }) => async (dispatch) => {

    try {


        dispatch({
            type: "contactFormRequest"
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }
        const formData = {
            name,
            email, message
        }

        const { data } = await axios.post(`${server}/contact`, formData, config);

        dispatch({
            type: "contactFormSuccess",
            payload: data.message,
        });

    } catch (error) {
        dispatch({
            type: "contactFormFail",
            payload: error.response.data.message
        })

    }
}

