import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./slices/cartItems";

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
});

export default store;
