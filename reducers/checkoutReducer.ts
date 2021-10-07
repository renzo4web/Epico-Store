import { CheckoutClass } from "../types/Checkout.interface";

export interface CheckoutState {
  cart: any[];
  cartOpen: boolean;
  checkoutId: string | null;
  checkoutUrl: string | null;
}

const initialState: CheckoutState = {
  cart: [],
  cartOpen: false,
  checkoutId: null,
  checkoutUrl: null,
};

export type AddToCart = {
  type: "ADD_TO_CART";
  payload: any;
};

export type SetCheckoutId = {
  type: "SET_CHECKOUT_ID";
  payload: string;
};

export type SetCheckoutURL = {
  type: "SET_CHECKOUT_URL";
  payload: string;
};

// Set cart from localstorage
export type SetCart = {
  type: "SET_CART";
  payload: any;
};

type CheckoutActions = AddToCart | SetCheckoutId | SetCheckoutURL | SetCart;

export const checkoutReducer = (
  state: CheckoutState = initialState,
  { type, payload }: CheckoutActions
) => {
  switch (type) {
    case "ADD_TO_CART":
      let newCart = [...state.cart];

      state.cart.length === 0
        ? (newCart = [{ ...payload }])
        : state.cart.map((item) => {
            if (item.id === payload.id) {
              item.variantQuantity++;
              newCart = [...state.cart];
            } else {
              newCart = [...state.cart, { ...payload }];
            }
          });

      return {
        ...state,
        cart: [...newCart],
      };

    case "SET_CHECKOUT_ID":
      return { ...state, checkoutId: payload };

    case "SET_CHECKOUT_URL":
      return { ...state, checkoutUrl: payload };

    case "SET_CART":
      return { ...state, cart: [...payload] };

    default:
      return state;
  }
};
