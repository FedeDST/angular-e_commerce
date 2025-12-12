import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../../core/models/product.model";

@Injectable({ providedIn: "root" })
export class CartStoreService {
  private _cart = new BehaviorSubject<Product[]>([]);
  cart$ = this._cart.asObservable();

  add(product: Product) {
    if (this._cart.value.find((p) => p.id === product.id)) {
      product.quantity = this.countProductInCart(product.id, product.quantity);
      return;
    } else {
      product.quantity = 1;
      this._cart.next([...this._cart.value, product]);
    }
  }

  remove(id: number) {
    if (this._cart.value.find((p) => p.id === id)?.quantity == 1) {
      this._cart.next(this._cart.value.filter((p) => p.id !== id));
    } else {
      this._cart.value.find((p) => p.id === id)!.quantity--;
    }
  }

  clear() {
    this._cart.next([]);
  }
  countProductInCart(id: number, quantity: number): number {
    return this._cart.value.filter((product) => product.id === id) ? quantity + 1: quantity;
  }
}
