import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //Combination different reducer function
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
