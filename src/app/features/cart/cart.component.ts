import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService } from '../../core/services/cart-store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart$ = this.cartStore.cart$;

  constructor(private cartStore: CartStoreService) {}

  remove(id: number) {
    this.cartStore.remove(id);
  }

  clear() {
    this.cartStore.clear();
  }
}
