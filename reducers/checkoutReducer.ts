interface InitialState {
  cart: [];
  cartOpen: boolean;
  checkoutId: string | null;
  checkoutUrl: string | null;
}

const initialState: InitialState = {
  cart: [],
  cartOpen: false,
  checkoutId: null,
  checkoutUrl: null,
};

type CheckoutActions = AddToCart;

export type AddToCart = {
  type: "ADD_TO_CART";
  payload: {
    id: string;
    webUrl: string;
  };
};

export const checkoutReducer = (
  state: InitialState = initialState,
  action: CheckoutActions
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        checkoutId: action.payload.id,
        checkoutUrl: action.payload.webUrl,
      };
    default:
      return state;
  }
};
