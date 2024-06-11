import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Product.Slice"

export const store = configureStore({
    reducer: productsReducer,
})