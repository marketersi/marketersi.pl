import { combineReducers } from "redux";
import contactReducer from "@/redux/kontakt/contactSlice";
import factsReducer from "@/redux/faktow/factSlice";
import calculatorReducer from "@/redux/kalkulator/calculatorSlice";
import homeReducer from "@/redux/home/homeSlice";
import consultingReducer from "@/redux/konsultacje/consultingSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  contact: contactReducer,
  facts: factsReducer,
  calculator: calculatorReducer,
  consulting: consultingReducer,
});

export default rootReducer;
