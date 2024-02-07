import { combineReducers } from "redux";
import contactReducer from "@/redux/kontakt/contactSlice";
import factsReducer from "@/redux/faktow/factSlice";
import calculatorReducer from "@/redux/kalkulator/calculatorSlice";
import homeReducer from "@/redux/home/homeSlice";
import logoReducer from "@/redux/projektowanie-logo/logoSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  contact: contactReducer,
  facts: factsReducer,
  calculator: calculatorReducer,
  logo: logoReducer,
});

export default rootReducer;
