import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFurniture } from "./furnitureAction";

const initialState = {
    isLoading: false,
    furnitures: [],
}


const furnitureSlice = createSlice({
    "name": "furniture",
    initialState,
    extraReducers: {
        [getFurniture.pending] : (state, action) =>{
            state.isLoading = true;
        },
        [getFurniture.fulfilled] : (state, action) => {
            state.furnitures = action.payload.data.data;
            state.isLoading = false;
        },
        [getFurniture.rejected] : (state, action) => {
            state.furnitures = []
        }
    }
});

export default furnitureSlice.reducer;