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

export const getAllItemsBySearchReducer = createReducer({ itemsBySearch: [] }, {

    getAllItemsBySearchRequest: (state) => {
        state.loading = true;

    },

    getAllItemsBySearchSuccess: (state, action) => {
        state.loading = false;
        state.itemsBySearch = action.payload;
        // console.log(state.items)
    },

    getAllItemsBySearchFail: (state, action) => {
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
export const getAllItemsByCategoryReducers = createReducer({ itemsByCategory: [] }, {

    getAllItemsByCategoryRequest: (state) => {
        state.loading = true;

    },

    getAllItemsByCategorySuccess: (state, action) => {
        state.loading = false;
        state.itemsByCategory = action.payload;
        // console.log(state.items)
    },

    getAllItemsByCategoryFail: (state, action) => {
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
export const itemsByCategoryReducers = createReducer({ items: {vegPizza:[],nonVeg:[],pizzaMania:[],sideAndBeverages:[],pasta:[]} }, {

    itemsByCategoryRequest: (state) => {
        state.loading = true;
    },

    vegPizzaItemsSuccess: (state, action) => {
        state.loading = false;
        state.items.vegPizza = action.payload;
        // console.log(state.items)
    },
    nonVegPizzaItemsSuccess: (state, action) => {
        state.loading = false;
        state.items.nonVeg = action.payload;
        // console.log(state.items)
    },
    pizzaManiaItemsSuccess: (state, action) => {
        state.loading = false;
        state.items.pizzaMania = action.payload;
        // console.log(state.items)
    },
    sideAndBeveragesItemsSuccess: (state, action) => {
        state.loading = false;
        state.items.sideAndBeverages = action.payload;
        // console.log(state.items)
    },
    pastaItemsSuccess: (state, action) => {
        state.loading = false;
        state.items.pasta = action.payload;
        // console.log(state.items)
    },

    itemsByCategoryFail: (state, action) => {
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
