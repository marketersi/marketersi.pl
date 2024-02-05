import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchExaminationScreenFail,
  fetchExaminationScreenStart,
  fetchExaminationScreenSuccess,
} from "./zamowSlice";

export function* examinationScreenSaga() {
  try {
    console.log("Inside exam screen saga");
    yield put(fetchExaminationScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.EXAMINATION_SCREEN
    );

    if (responseData) {
      console.log("exam screen data saga ==>", responseData.data);
      yield put(fetchExaminationScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchExaminationScreenFail());
    }
  } catch (error) {
    console.error("Error in exam screen saga:", error);
    yield put(fetchExaminationScreenFail());
  }
}
