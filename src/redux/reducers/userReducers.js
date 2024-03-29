import { createReducer } from "@reduxjs/toolkit";


const intialState = {
    isAuthenticated :false,
    user:{},
    
}

export const authReducer = createReducer(intialState ,
    {
        loadUserRequest: (state) => {
            state.loading = true;
        },

        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;

            localStorage.setItem("auth", JSON.stringify(state.user))
         
        },

        loadUserFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        logoutRequest: (state) => {
            state.loading = true;
        },

        logoutSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            localStorage.setItem("auth",JSON.stringify(state.user))
            
        },

        logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
          
        },
        clearMessage:(state) => {
            state.message = null;
        },
        clearError:(state) => {
            state.error = null;
        }
    })


export const getProfilePhotoReducer = createReducer({ profilePhoto:""}, {
    getProfilePhotoRequest:(state) => {
        state.loading = true;
    },
    getProfilePhotoSuccess:(state,action) => {
        state.loading = false;
        state.profilePhoto = action.payload
    },
    getProfilePhotoFail:(state,action) => {
        state.loading = false;
        state.error = action.payload
    }
})
export const uploadProfilePhotoReducer = createReducer({}, {
    uploadProfilePhotoRequest:(state) => {
        state.loading = true;
    },
    uploadProfilePhotoSuccess:(state,action) => {
        state.loading = false;
        state.message = action.payload
    },
    uploadProfilePhotoFail:(state,action) => {
        state.loading = false;
        state.error = action.payload
    }
})
