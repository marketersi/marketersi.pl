import { combineReducers } from "redux";
import contactReducer from "@/redux/kontakt/contactSlice";
import factsReducer from "@/redux/faktow/factSlice";
import calculatorReducer from "@/redux/kalkulator/calculatorSlice";

const rootReducer = combineReducers({
  contact: contactReducer,
  facts: factsReducer,
  calculator: calculatorReducer,
});

export default rootReducer;
