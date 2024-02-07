import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchPriceListScreenFail,
  fetchPriceListScreenStart,
  fetchPriceListScreenSuccess,
} from "./pricelistSlice";

export function* priceListScreenSaga() {
  try {
    console.log("Inside Price list screen saga");
    yield put(fetchPriceListScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.PRICE_LIST_SCREEN
    );

    if (responseData) {
      console.log("Price list screen data saga ==>", responseData.data);
      yield put(fetchPriceListScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchPriceListScreenFail());
    }
  } catch (error) {
    console.error("Error in Price list screen saga:", error);
    yield put(fetchPriceListScreenFail());
  }
}
