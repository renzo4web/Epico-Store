import { createCheckout, updateCheckout } from "../lib/shopify";
import {
  AddToCart,
  SetCart,
  SetCartOpen,
  SetCheckoutId,
  SetCheckoutURL,
} from "../reducers/checkoutReducer";
import { RootState } from "../reducers/rootReducer";

export const startAddToCart = (newItem) => {
  return async (dispatch, getState) => {
    const state = getState() as RootState;
    const { cart, checkoutId } = state.checkout;
    try {
      if (cart.length === 0) {
        const checkout = await createCheckout(
          newItem.id,
          newItem.variantQuantity
        );
        const { id, webUrl } = checkout;

        dispatch(setCheckoutId(id));
        dispatch(setCheckoutUrl(webUrl));
        dispatch(addToCart(newItem));

        localStorage.setItem(
          "checkout_id",
          JSON.stringify([newItem, checkout])
        );
      } else {
        const newCheckout = await updateCheckout(checkoutId, [
          ...cart,
          newItem,
        ]);
        localStorage.setItem(
          "checkout_id",
          JSON.stringify([[...cart, newItem], newCheckout])
        );
        dispatch(addToCart(newItem));
        dispatch(setCheckoutUrl(newCheckout?.webUrl));
        dispatch(toggleCartOpen(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeItem = (itemToRemove) => {
  return async (dispatch, getState) => {
    try {
      const state = getState() as RootState;
      const { cart, checkoutId } = state.checkout;

      const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
      const newCheckout = await updateCheckout(checkoutId, updatedCart);

      dispatch(setCart(updatedCart));
      dispatch(setCheckoutUrl(newCheckout?.webUrl));
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([updatedCart, newCheckout])
      );

      if (cart.length === 1) {
        dispatch(toggleCartOpen(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const addToCart = (newItem: any): AddToCart => ({
  type: "ADD_TO_CART",
  payload: newItem,
});

export const setCheckoutId = (id: string): SetCheckoutId => ({
  type: "SET_CHECKOUT_ID",
  payload: id,
});

export const setCheckoutUrl = (url: string): SetCheckoutURL => ({
  type: "SET_CHECKOUT_URL",
  payload: url,
});

export const setCart = (savedCart: any[]): SetCart => ({
  type: "SET_CART",
  payload: savedCart,
});

export const toggleCartOpen = (bool: boolean = null): SetCartOpen => ({
  type: "TOGGLE_CART_OPEN",
  payload: bool,
});
  
