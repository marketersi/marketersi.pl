import { combineReducers } from "redux";
import contactReducer from "@/redux/kontakt/contactSlice";
import factsReducer from "@/redux/faktow/factSlice";

const rootReducer = combineReducers({
  contact: contactReducer,
  facts: factsReducer,
});

export default rootReducer;
