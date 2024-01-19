import { FETCH_CONTACT_SCREEN_DATA } from "@/redux/kontakt/contactActions";
import { contactScreenSaga } from "@/redux/kontakt/contactSagas";
import { all, takeLatest } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([takeLatest(FETCH_CONTACT_SCREEN_DATA, contactScreenSaga)]);
}
