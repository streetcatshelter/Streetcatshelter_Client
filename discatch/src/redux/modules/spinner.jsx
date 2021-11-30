// API
import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  isLoaded: false,
};

// REDUCER
const spinner = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { loading } = spinner.actions;
export default spinner;
