import { FETCH_FACTS_SCREEN_DATA } from "@/redux/faktow/factActions";
import { factsScreenSaga } from "@/redux/faktow/factSagas";
import { FETCH_CONTACT_SCREEN_DATA } from "@/redux/kontakt/contactActions";
import { contactScreenSaga } from "@/redux/kontakt/contactSagas";
import { all, takeLatest } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_CONTACT_SCREEN_DATA, contactScreenSaga),
    takeLatest(FETCH_FACTS_SCREEN_DATA, factsScreenSaga),
  ]);
}
