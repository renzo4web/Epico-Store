import { combineReducers } from "redux";
import { checkoutReducer, CheckoutState } from "./checkoutReducer";

export interface RootState {
  checkout: CheckoutState;
}

export const rootReducer = combineReducers({
  checkout: checkoutReducer,
});
