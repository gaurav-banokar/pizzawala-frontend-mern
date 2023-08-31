import { createReducer } from "@reduxjs/toolkit";

export const orderReducers = createReducer({}, {
  createOrderRequest: (state) => {
    state.loading = true;
  },

  createOrderSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  createOrderFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearMessage: (state) => {
    state.message = null;
  },
  clearError: (state) => {
    state.error = null;
  },

})

const orders = localStorage.getItem("orders") !== null ? JSON.parse(localStorage.getItem("orders")) : []

const eachOrder = localStorage.getItem("eachOrder") != null ? JSON.parse(localStorage.getItem("eachOrder")) : []


export const ordersReducers = createReducer(
  { orders: orders, eachOrder },
  {
    getMyOrdersRequest: (state) => {
      state.loading = true;
    },
    getMyOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;

      localStorage.setItem("orders", JSON.stringify(state.orders))
    },
    getMyOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;

      localStorage.setItem("orders", JSON.stringify(state.orders = null))
    },
    getOrderDetailsRequest: (state) => {
      state.loading = true;
    },
    getOrderDetailsSuccess: (state, action) => {
      state.loading = false;
      state.eachOrder = action.payload;

      localStorage.setItem("eachOrder", JSON.stringify(state.eachOrder))
    },
    getOrderDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;

      localStorage.setItem("eachOrder", JSON.stringify(state.eachOrder = null))
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },

  },
);

