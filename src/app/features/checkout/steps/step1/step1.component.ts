import { Component, OnInit } from '@angular/core';
import { CartComponent } from "../../../cart/cart.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutStore } from '../../../../core/services/checkout-store.service';
import { CommonModule } from '@angular/common';
import { CustomerInfo } from '../../../../core/models/checkout.model';

@Component({
  selector: "app-step1",
  imports: [CartComponent, ReactiveFormsModule, CommonModule],
  templateUrl: "./step1.component.html",
  styleUrl: "./step1.component.css",
})
export class Step1Component {
  customerData:CustomerInfo  = {
    nome:'',
    cognome:'',
    email:'',
    indirizzo:''
  };
  constructor(private fb: FormBuilder, private checkoutStore: CheckoutStore) {}

  customerForm = this.fb.nonNullable.group({
    nome: [this.checkoutStore.getCustomer()?.nome, [Validators.required, Validators.minLength(3)]],
    cognome: [this.checkoutStore.getCustomer()?.cognome, [Validators.required, Validators.minLength(3)]],
    email: [this.checkoutStore.getCustomer()?.email, [Validators.required, Validators.email]],
    indirizzo: [this.checkoutStore.getCustomer()?.indirizzo, [Validators.required, Validators.minLength(5)]],
  });
  onSubmit() {
    this.checkoutStore.setCustomer({
      nome: this.customerForm.value.nome ?? "",
      cognome: this.customerForm.value.cognome ?? "",
      email: this.customerForm.value.email ?? "",
      indirizzo: this.customerForm.value.indirizzo ?? "",
    });
    this.checkoutStore.nextStep();
  }
}
