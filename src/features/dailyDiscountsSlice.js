import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// دریافت داده‌ها از `db.json`
export const fetchDailyDiscounts = createAsyncThunk(
    "dailyDiscounts/fetchDailyDiscounts",
    async() => {
        const response = await fetch("http://localhost:5000/dailyDiscounts"); // مسیر JSON سرور
        if (!response.ok) {
            throw new Error("مشکل در دریافت اطلاعات تخفیف‌های روزانه");
        }
        return response.json();
    }
);

const dailyDiscountsSlice = createSlice({
    name: "dailyDiscounts",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyDiscounts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDailyDiscounts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchDailyDiscounts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default dailyDiscountsSlice.reducer;