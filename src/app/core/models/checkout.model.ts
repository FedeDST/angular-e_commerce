export interface CustomerInfo {
  nome: string;
  cognome:string,
  email: string;
  indirizzo: string;
}

export interface ShippingInfo {
  method: 'standard' | 'express';
  cost: number;
}

export interface PaymentInfo {
  cardName: string;
  cardNumber: string; // mock
}

export interface CheckoutState {
  step: number;
  customer?: CustomerInfo;
  shipping?: ShippingInfo;
  payment?: PaymentInfo;
}