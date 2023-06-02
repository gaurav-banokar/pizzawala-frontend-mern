import { createReducer } from "@reduxjs/toolkit";


export const createItemReducer = createReducer({}, {

    createItemRequest: (state) => {
        state.loading = true;

    },

    createItemSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },

    createItemFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },
});


export const getAllItemsReducers = createReducer({ items: [] }, {

    getAllItemsRequest: (state) => {
        state.loading = true;

    },

    getAllItemsSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // console.log(state.items)
    },

    getAllItemsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },
});
