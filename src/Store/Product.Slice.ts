import { createSlice } from "@reduxjs/toolkit";


type State = {
    // Products: products[]
}
const initialState:State = {
    Products:[]
}

const userSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export default userSlice.reducer