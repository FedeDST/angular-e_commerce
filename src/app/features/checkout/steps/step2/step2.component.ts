import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../../../core/services/checkout-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component{
 @Input() isDetail: boolean = false;
 selected: string | undefined = undefined;

  constructor(private checkoutStore: CheckoutStore,private fb:FormBuilder) {}
  shippingForm = this.fb.nonNullable.group({
    ship: [this.checkoutStore.getShipping()?.method || '', Validators.required],
  });


  next() {

    this.checkoutStore.setShipping({
      method: this.shippingForm.value.ship,
      cost: this.shippingForm.value.ship === 'express' ? 10 : 5,
    });
    this.checkoutStore.nextStep();
  }

  back() {
    this.checkoutStore.prevStep();
  }
}