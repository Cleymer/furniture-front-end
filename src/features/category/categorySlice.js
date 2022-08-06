import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./categoryAction";

const initialState = {
    category: [],
    error: null
}

const categorySlice = createSlice({
    "name": "category",
    initialState,
    extraReducers: {
        [getCategory.fulfilled] : (state, action) => {
            state.category = action.payload
        },
        [getCategory.rejected] : (state, action) => {
            state.category = [];
            state.error = "Can't get the categories"
        }
    }
});

export default categorySlice.reducer;