import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch contact screen data
    fetchContactScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching contact screen data is successful
    fetchContactScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching contact screen data is successful
    fetchContactScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchContactScreenStart,
  fetchContactScreenSuccess,
  fetchContactScreenFail,
} = contactSlice.actions;
export default contactSlice.reducer;
