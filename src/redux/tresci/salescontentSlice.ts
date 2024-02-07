import { createSlice } from "@reduxjs/toolkit";

const salesContentSlice = createSlice({
  name: "anatomy",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch sales content screen data
    fetchSalesContentScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching sales content screen data is successful
    fetchSalesContentScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching sales content screen data is successful
    fetchSalesContentScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchSalesContentScreenStart,
  fetchSalesContentScreenSuccess,
  fetchSalesContentScreenFail,
} = salesContentSlice.actions;
export default salesContentSlice.reducer;
