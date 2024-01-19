import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchContactScreenStart,
  fetchContactScreenSuccess,
  fetchContactScreenFail,
} from "./contactSlice";

export function* contactScreenSaga() {
  try {
    console.log("Inside contact screen saga");
    yield put(fetchContactScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CONTACT_SCREEN
    );

    if (responseData) {
      console.log("contact screen data saga ==>", responseData.data);
      yield put(fetchContactScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchContactScreenFail());
    }
  } catch (error) {
    console.error("Error in contact screen saga:", error);
    yield put(fetchContactScreenFail());
  }
}
