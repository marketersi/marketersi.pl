import { combineReducers } from "redux";
import contactReducer from "@/redux/kontakt/contactSlice";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;
