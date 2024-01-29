import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch home screen data
    fetchHomeScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching home screen data is successful
    fetchHomeScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching home screen data is successful
    fetchHomeScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchHomeScreenStart,
  fetchHomeScreenSuccess,
  fetchHomeScreenFail,
} = homeSlice.actions;
export default homeSlice.reducer;
