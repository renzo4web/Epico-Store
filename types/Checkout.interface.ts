export interface Checkout {
  data: Data;
}

export interface Data {
  checkoutCreate: CheckoutCreate;
}

export interface CheckoutCreate {
  checkout: CheckoutClass;
}

export interface CheckoutClass {
  id: string;
  webUrl: string;
}
