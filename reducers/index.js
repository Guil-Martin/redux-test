import { combineReducers } from "redux";
import PlusMinusReducer from "./PlusMinusReducer";

export default combineReducers({
  values: PlusMinusReducer,
});
