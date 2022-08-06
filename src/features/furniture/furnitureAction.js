import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithoutToken } from "../../helpers/fetchAxios";

export const getFurniture = createAsyncThunk("furniture/getFurntiture", 
    async () => await fetchWithoutToken('mueble')
)