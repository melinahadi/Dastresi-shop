import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ مسیر درست برای دریافت داده‌ها
export const fetchFooterData = createAsyncThunk(
    "footer/fetchFooterData",
    async() => {
        const response = await fetch("http://localhost:5000/footer"); // تغییر مسیر `fetch`
        if (!response.ok) {
            throw new Error("مشکل در دریافت اطلاعات فوتر");
        }
        const data = await response.json();
        return data || { quickLinks: [], contactInfo: {} }; // مقدار پیش‌فرض برای جلوگیری از `undefined`
    }
);

const footerSlice = createSlice({
    name: "footer",
    initialState: {
        data: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFooterData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFooterData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload || { quickLinks: [], contactInfo: {} };
            })
            .addCase(fetchFooterData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default footerSlice.reducer;