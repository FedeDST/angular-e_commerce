import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../../../core/services/checkout-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {

 selected: 'standard' | 'express' | null = null;

  constructor(private checkoutStore: CheckoutStore) {}

  select(method: 'standard' | 'express') {
    this.selected = method;
  }

  next() {
    if (!this.selected) return;

    this.checkoutStore.setShipping({
      method: this.selected,
      cost: this.selected === 'express' ? 10 : 5,
    });
    this.checkoutStore.nextStep();
  }

  back() {
    this.checkoutStore.prevStep();
  }
}