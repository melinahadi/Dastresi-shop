import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBestSelling = createAsyncThunk(
    "bestselling/fetchBestSelling",
    async() => {
        const response = await axios.get("http://localhost:5000/bestSelling"); // مسیر JSON خود را تنظیم کنید
        return response.data;
    }
);

const bestsellingSlice = createSlice({
    name: "bestselling",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestSelling.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBestSelling.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchBestSelling.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default bestsellingSlice.reducer;