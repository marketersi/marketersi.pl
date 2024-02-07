import { FETCH_FACTS_SCREEN_DATA } from "@/redux/faktow/factActions";
import { factsScreenSaga } from "@/redux/faktow/factSagas";
import { FETCH_HOME_SCREEN_DATA } from "@/redux/home/homeAction";
import { homeScreenSaga } from "@/redux/home/homeSagas";
import { FETCH_CALCULATOR_SCREEN_DATA } from "@/redux/kalkulator/calculatorAction";
import { calculatorScreenSaga } from "@/redux/kalkulator/calculatorSaga";
import { FETCH_CONSULTING_SCREEN_DATA } from "@/redux/konsultacje/consultingAction";
import { consultingScreenSaga } from "@/redux/konsultacje/consultingSaga";
import { FETCH_CONTACT_SCREEN_DATA } from "@/redux/kontakt/contactActions";
import { contactScreenSaga } from "@/redux/kontakt/contactSagas";
import { FETCH_LOGO_SCREEN_DATA } from "@/redux/projektowanie-logo/logoAction";
import { logoScreenSaga } from "@/redux/projektowanie-logo/logoSaga";
import { all, takeLatest } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_CONTACT_SCREEN_DATA, contactScreenSaga),
    takeLatest(FETCH_FACTS_SCREEN_DATA, factsScreenSaga),
    takeLatest(FETCH_CALCULATOR_SCREEN_DATA, calculatorScreenSaga),
    takeLatest(FETCH_HOME_SCREEN_DATA, homeScreenSaga),
    takeLatest(FETCH_CONSULTING_SCREEN_DATA, consultingScreenSaga),
    takeLatest(FETCH_LOGO_SCREEN_DATA, logoScreenSaga),
  ]);
}
