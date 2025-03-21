import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// دریافت داده‌ها از `db.json` (json-server)
export const fetchBenefits = createAsyncThunk(
    "benefits/fetchBenefits",
    async() => {
        const response = await fetch("http://localhost:5000/benefits");
        return response.json();
    }
);

const benefitsSlice = createSlice({
    name: "benefits",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBenefits.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBenefits.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // ذخیره داده‌ها
            })
            .addCase(fetchBenefits.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default benefitsSlice.reducer;