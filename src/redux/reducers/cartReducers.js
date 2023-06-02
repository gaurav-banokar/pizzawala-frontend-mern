import { createReducer } from "@reduxjs/toolkit";


const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : []
const subTotal = localStorage.getItem("subTotal") !== null ? JSON.parse(localStorage.getItem("subTotal")) : 0
const tax = localStorage.getItem("tax") !== null ? JSON.parse(localStorage.getItem("tax")) : 0
const shippingCharges = localStorage.getItem("shippingCharges") !== null ? JSON.parse(localStorage.getItem("shippingCharges")) : 0
const total = localStorage.getItem("total") !== null ? JSON.parse(localStorage.getItem("total")) : 0
const shippingInfo = localStorage.getItem("shippingInfo") !== null ? JSON.parse(localStorage.getItem("shippingInfo")) : {}

const initialState = {
  cartItems: items,
  subTotal: subTotal,
  tax: tax,
  shippingCharges: shippingCharges,
  total: total,
  shippingInfo: shippingInfo,
}

export const cartReducers = createReducer(initialState,
  {
    addToCartRequest: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {

      state.loading = false;
      const item = action.payload;

      const isItemexist = state.cartItems.find((i) =>
        i.id === item.id
      );
      //  console.log(isItemexist)
      if (isItemexist) {
        state.cartItems = state.cartItems.map((i) => {
          if (isItemexist.id === i.id) {
            i.quantity += 1;
            return i;
          }
          return i;
        });

      } else {
        state.cartItems = [...state.cartItems, item];

      }

    },

    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    saveQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      if (state.cartItems !== null) {
        const foodItem = state.cartItems.find(id);
        state.cartItems.map(i => {
          return i.id === foodItem.id ? i.quantity = quantity : i.quantity;
        });

      }
    },

    increment: (state, action) => {
      const id = action.payload;
      state.cartItems.map((i) => {
        return i.id === id ? i.quantity += 1 : i.quantity;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decrement: (state, action) => {
      const id = action.payload

      state.cartItems.map((i) => {
        return i.id === id ? i.quantity -= 1 : i.quantity;

      });
    },


    calculatePrice: (state) => {
      if (state.cartItems !== null) {
        var sub = state.cartItems.map((i) => {
          return i.quantity * i.price;
        })
      }
      let totalNum = 0;
      sub.forEach((e) => {
        totalNum += e;
        return totalNum;
      })



      state.subTotal = totalNum;
      state.tax = Number((state.subTotal * 0.18).toFixed());
      state.shippingCharges = state.subTotal > 1000 ? 0 : 50;
      state.total = state.subTotal + state.tax + state.shippingCharges;

      localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
      localStorage.setItem("tax", JSON.stringify(state.tax))
      localStorage.setItem("shippingCharges", JSON.stringify(state.shippingCharges))
      localStorage.setItem("total", JSON.stringify(state.total))
    },

    emptyState: (state) => {
      state.cartItems = []
      state.shippingInfo = null
      state.subTotal = 0;
      state.shippingCharges = 0;
      state.tax = 0;
      state.total = 0;


      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));
      localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
      localStorage.setItem("tax", JSON.stringify(state.tax))
      localStorage.setItem("shippingCharges", JSON.stringify(state.shippingCharges))
      localStorage.setItem("total", JSON.stringify(state.total))
    },

    addShippingInfo: (state, action) => {
      state.shippingInfo = {
        country: action.payload.country,
        state: action.payload.state,
        city: action.payload.city,
        hNo: action.payload.hNo,
        pinCode: action.payload.pinCode,
        phoneNo: action.payload.phoneNo,
      };

      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo))
    },

    removeCartItem: (state, action) => {

      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

    }
  }
)



