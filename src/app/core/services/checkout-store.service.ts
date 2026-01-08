import { Injectable, effect, signal } from '@angular/core';
import {
  CheckoutState,
  CustomerInfo,
  PaymentInfo,
  ShippingInfo
} from '../models/checkout.model';

@Injectable({ providedIn: 'root' })
export class CheckoutStore {
  private readonly initialState: CheckoutState = {
    step: 1,
    customer: {nome:'',cognome:'',email:'',indirizzo:''}
  };

  private readonly _state = signal<CheckoutState>(this.initialState);

  // readonly access
  readonly state = this._state;
  readonly step = () => this._state().step;

  constructor() {
    effect(() => {
      localStorage.setItem(
        'checkout',
        JSON.stringify(this._state())
      );
    });
  }

  setCustomer(customer: CustomerInfo) {
    this._state.update(s => ({ ...s, customer }));
  }
  getCustomer = () => this._state().customer;

  setShipping(shipping: ShippingInfo) {
    this._state.update(s => ({ ...s, shipping }));
  }

  setPayment(payment: PaymentInfo) {
    this._state.update(s => ({ ...s, payment }));
  }

  nextStep() {
    this._state.update(s => ({
      ...s,
      step: Math.min(s.step + 1, 4),
    }));
  }

  prevStep() {
    this._state.update(s => ({
      ...s,
      step: Math.max(s.step - 1, 1),
    }));
          console.log('prova',this._state());
  }

  reset() {
    this._state.set(this.initialState);
    localStorage.removeItem('checkout');
  }
}
