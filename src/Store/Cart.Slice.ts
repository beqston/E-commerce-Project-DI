import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../Types/ProductsTypes";


type State = {
    Products: ProductsType[]
}
const initialState:State = {
    Products:[]
}


const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addCard: (state)=> {
            state.Products.filter((item)=> item.id === item.id)
        }
    }
})

export const { addCard } = cartSlice.actions;
export default cartSlice.reducer