import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/v1/greetings");
    return response.data.greeting;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { data: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
