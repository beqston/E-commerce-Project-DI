import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Cart.Slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: productsReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export const useAppDispatch = ()=> useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;