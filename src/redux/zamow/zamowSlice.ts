import { createSlice } from "@reduxjs/toolkit";

const examinationSlice = createSlice({
  name: "examination",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch facts screen data
    fetchExaminationScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching Examination screen data is successful
    fetchExaminationScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching Examination screen data is successful
    fetchExaminationScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchExaminationScreenStart,
  fetchExaminationScreenSuccess,
  fetchExaminationScreenFail,
} = examinationSlice.actions;
export default examinationSlice.reducer;
