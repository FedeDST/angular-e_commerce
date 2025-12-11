import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CartComponent } from './features/cart/cart.component';
import { TopBarComponent } from "./features/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    CartComponent,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent
],
  template: `
    <div class="container mx-auto p-6">
      <app-top-bar></app-top-bar>
      <app-product-list></app-product-list>
      <app-cart></app-cart>
    </div>
  `,
})
export class AppComponent {}
