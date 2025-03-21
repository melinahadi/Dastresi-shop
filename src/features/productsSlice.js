import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// خواندن داده‌ها از JSON
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async() => {
        const response = await fetch("http://localhost:5000/products");
        // مسیر JSON
        return response.json();
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // اصلاح مقداردهی
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;