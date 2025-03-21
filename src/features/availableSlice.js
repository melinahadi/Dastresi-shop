import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvailable = createAsyncThunk(
    "available/fetchAvailable",
    async() => {
        const response = await axios.get("http://localhost:5000/available");
        return response.data;
    }
);

const availableSlice = createSlice({
    name: "available",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAvailable.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAvailable.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchAvailable.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default availableSlice.reducer;