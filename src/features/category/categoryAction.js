import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithoutToken } from "../../helpers/fetchAxios";


export const getCategory = createAsyncThunk("category/getCategory",
    async () => {
        const res = await fetchWithoutToken("category");
        console.log(res);
        return res.data.data;
    }
);