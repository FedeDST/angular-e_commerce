export interface CustomerInfo {
  nome: string;
  cognome:string,
  email: string;
  indirizzo: string;
}

export interface ShippingInfo {
  method: string | undefined;
  cost: number;
}

export interface PaymentInfo {
  cardName: string | undefined;
  cardNumber: string | undefined; // mock
}

export interface CheckoutState {
  step: number;
  customer?: CustomerInfo;
  shipping?: ShippingInfo;
  payment?: PaymentInfo;
}