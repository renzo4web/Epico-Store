import { createCheckout, updateCheckout } from "../lib/shopify";
import {
  AddToCart,
  SetCart,
  SetCheckoutId,
  SetCheckoutURL,
} from "../reducers/checkoutReducer";
import { CheckoutClass } from "../types/Checkout.interface";

export const startAddToCart = (newItem) => {
  return async (dispath, getState) => {
    const { cart, checkoutId } = getState().checkout;
    try {
      if (cart.length === 0) {
        const checkout = await createCheckout(
          newItem.id,
          newItem.variantQuantity
        );
        const { id, webURL } = checkout;

        dispath(setCheckoutId(id));
        dispath(setCheckoutUrl(webURL));
        dispath(addToCart(newItem));

        localStorage.setItem(
          "checkout_id",
          JSON.stringify([newItem, checkout])
        );
      } else {
        dispath(addToCart(newItem));
        const newCheckout = await updateCheckout(checkoutId, [
          ...cart,
          newItem,
        ]);
        dispath(setCheckoutUrl(newCheckout?.webURL));
        localStorage.setItem(
          "checkout_id",
          JSON.stringify([[...cart, newItem], newCheckout])
        );
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
