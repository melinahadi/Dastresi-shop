import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// درخواست برای دریافت برندهای محبوب از `db.json`
export const fetchPopularBrands = createAsyncThunk(
    "popularBrands/fetchPopularBrands",
    async() => {
        const response = await axios.get("http://localhost:5000/popular-brands");
        return response.data;
    }
);

const popularBrandsSlice = createSlice({
    name: "popularBrands",
    initialState: {
        brands: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularBrands.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPopularBrands.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.brands = action.payload;
            })
            .addCase(fetchPopularBrands.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default popularBrandsSlice.reducer;