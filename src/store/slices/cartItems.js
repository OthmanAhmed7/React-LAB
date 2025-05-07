import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItemsVal: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItemsVal.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.cartItemsVal.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItemsVal = state.cartItemsVal.filter(
        (item) => item.id !== action.payload.id
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItemsVal.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItemsVal.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItemsVal = state.cartItemsVal.filter(
            (i) => i.id !== item.id
          );
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
