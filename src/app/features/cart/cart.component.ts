import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService } from '../../core/services/cart-store.service';
import { Product } from '../../core/models/product.model';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { IconService } from '../../core/services/icon.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink,FontAwesomeModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() hideButton:boolean = false;
  cart$ = this.cartStore.cart$;
  total = 0;


  total$ = this.cart$.pipe(
    map(items =>
      items.reduce(
        (sum, i) => sum + i.price * i.quantity,0).toFixed(2)
    )
  );

  constructor(private cartStore: CartStoreService,private icon:IconService) {}
  icons = this.icon.icons;

  remove(id: number) {
    this.cartStore.remove(id);
    this.total = this.cartStore.calculateTotal();
  }
  add(product:Product) {
    this.cartStore.add(product);
    this.total = this.cartStore.calculateTotal();
  }

  clear() {
    this.cartStore.clear();
    this.total = this.cartStore.calculateTotal();
  }
}
