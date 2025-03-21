import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// دریافت بنرها از API
export const fetchBanners = createAsyncThunk(
    "banners/fetchBanners",
    async() => {
        const response = await fetch("http://localhost:5000/banners");
        return response.json();
    }
);

const bannersSlice = createSlice({
    name: "banners",
    initialState: {
        banners: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanners.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBanners.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.banners = action.payload;
            })
            .addCase(fetchBanners.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default bannersSlice.reducer;