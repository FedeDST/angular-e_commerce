import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../core/models/product.model';

@Injectable({ providedIn: 'root' })
export class CartStoreService {
  private _cart = new BehaviorSubject<Product[]>([]);
  cart$ = this._cart.asObservable();

  add(product: Product) {
    this._cart.next([...this._cart.value, product]);
  }

  remove(id: number) {
    this._cart.next(this._cart.value.filter((p) => p.id !== id));
  }

  clear() {
    this._cart.next([]);
  }
}
