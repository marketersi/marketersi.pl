import { createSlice } from "@reduxjs/toolkit";

const priceListSlice = createSlice({
  name: "pricelist",
  initialState: {
    isLoading: false,
    screenData: {},

    isMenuSubmit: false,
  },
  reducers: {
    // Action when starting to fetch price list screen data
    fetchPriceListScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching price list screen data is successful
    fetchPriceListScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching price list screen data is successful
    fetchPriceListScreenFail: (state) => {
      state.isLoading = false;
    },
    // ----------
    isMenuSubmitStarted: (state) => {
      state.isMenuSubmit = true;
    },

    isMenuSubmitSuccess: (state) => {
      state.isMenuSubmit = false;
    },

    isMenuSubmitFail: (state) => {
      state.isMenuSubmit = false;
    },
  },
});

export const {
  fetchPriceListScreenStart,
  fetchPriceListScreenSuccess,
  fetchPriceListScreenFail,

  isMenuSubmitStarted,
  isMenuSubmitSuccess,
  isMenuSubmitFail,
} = priceListSlice.actions;
export default priceListSlice.reducer;
