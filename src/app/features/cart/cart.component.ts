import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService } from '../../core/services/cart-store.service';
import { Product } from '../../core/models/product.model';
import { map} from 'rxjs';
import { RouterLink } from '@angular/router';
import { IconService } from '../../core/services/icon.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastService } from '../../core/services/toast.service';
@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() isDetail: boolean = false;
  cart$ = this.cartStore.cart$;
  total = 0;

  total$ = this.cart$.pipe(
    map((items) =>
      items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)
    )
  );

  constructor(
    private cartStore: CartStoreService,
    private icon: IconService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
      this.cartStore.prepopulateCart();
  }
  icons = this.icon.icons;
  toast = this.toastService.createToast();

  remove(id: number) {
    this.cartStore.remove(id);
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, "Prodotto rimosso", "E");
  }
  add(product: Product) {
    this.cartStore.add(product);
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, "Prodotto aggiunto", "S");
  }

  clear() {
    this.cartStore.clear();
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, "Carrello svuotato", "E");
  }
}
