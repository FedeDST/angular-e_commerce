import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CartComponent } from './features/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    CartComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Angular E-commerce Test</h1>
      <app-product-list></app-product-list>
      <app-cart></app-cart>
    </div>
  `,
})
export class AppComponent {}
