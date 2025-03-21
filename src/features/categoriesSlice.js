import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// درخواست async برای دریافت JSON
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async() => {
        const response = await fetch("http://localhost:5000/selected-categories");
        if (!response.ok) {
            throw new Error("مشکل در دریافت داده‌ها از سرور");
        }
        const data = await response.json();
        return data; // ✅ این مقدار باید مستقیم آرایه باشد
    }
);




const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default categoriesSlice.reducer;