import { combineReducers } from "redux";
import { checkoutReducer } from "./checkoutReducer";

export const rootReducer = combineReducers({
  checkout: checkoutReducer,
});
