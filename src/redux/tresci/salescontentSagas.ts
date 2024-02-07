import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchSalesContentScreenFail,
  fetchSalesContentScreenStart,
  fetchSalesContentScreenSuccess,
} from "./salescontentSlice";

export function* anatomyScreenSaga() {
  try {
    console.log("Inside sales content screen saga");
    yield put(fetchSalesContentScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.SALES_SCREEN
    );

    if (responseData) {
      console.log("sales content screen data saga ==>", responseData.data);
      yield put(
        fetchSalesContentScreenSuccess({ response: responseData.data })
      );
    } else {
      yield put(fetchSalesContentScreenFail());
    }
  } catch (error) {
    console.error("Error in sales content screen saga:", error);
    yield put(fetchSalesContentScreenFail());
  }
}
