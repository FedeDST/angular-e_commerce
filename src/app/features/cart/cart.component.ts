import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService } from '../../core/services/cart-store.service';
import { Product } from '../../core/models/product.model';
import { combineLatest, map} from 'rxjs';
import { RouterLink } from '@angular/router';
import { IconService } from '../../core/services/icon.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastService } from '../../core/services/toast.service';
import { CheckoutStore } from '../../core/services/checkout-store.service';
import {toObservable } from '@angular/core/rxjs-interop';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule,TranslatePipe],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() isDetail: boolean = false;
  cart$ = this.cartStore.cart$;
  // CONVERTO IN OBSERVABLE IL COMPUTED DEL CHECKOUT STORE PER OTTENERE 
  // IL COSTO DELLA SPEDIZIONE E POTERLO CONFRONTARE CON IL SIGNAL
  shippingCost$ = toObservable(this.checkoutStore.shippingCost);
  // USO IL COMPUTED DIRETTAMENTE NEL TEMPLATE
  actualShippingCost = this.checkoutStore.shippingCost;
  total = 0;
  toastAddMsg ='';
  toastRemoveMsg ='';
  toastEmptyMsg ='';
  total$ = combineLatest([this.cart$, this.shippingCost$]).pipe(
    map(([items, shippingCost]) =>
      items.reduce((sum, i) => sum + i.price * i.quantity + shippingCost, 0) .toFixed(2)
    )
  );

  constructor(
    private cartStore: CartStoreService,
    private icon: IconService,
    private toastService: ToastService,
    private checkoutStore: CheckoutStore,
    private translate: TranslateService
  ) {
     this.translate.stream('cart.add')
    .subscribe(value => this.toastAddMsg = value);
    this.translate.stream('cart.remove')
    .subscribe(value => this.toastRemoveMsg = value);
    this.translate.stream('cart.empty')
    .subscribe(value => this.toastEmptyMsg = value);
  }
  ngOnInit(): void {
      this.cartStore.prepopulateCart();
  }
  icons = this.icon.icons;
  toast = this.toastService.createToast();

  remove(id: number) {
    this.cartStore.remove(id);
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, this.toastRemoveMsg, "E");
  }
  add(product: Product) {
    this.cartStore.add(product);
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, this.toastAddMsg, "S");
  }

  clear() {
    this.cartStore.clear();
    this.total = this.cartStore.calculateTotal();
    this.toastService.updateToast(this.toast, this.toastEmptyMsg, "E");
  }
}
