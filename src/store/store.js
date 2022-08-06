import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import categorySlice from "../features/category/categorySlice";
import furnitureSlice from "../features/furniture/furnitureSlice";

export const store = configureStore({
    reducer: {
        furniture : furnitureSlice,
        category : categorySlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});