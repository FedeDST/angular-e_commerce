import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductStoreService {
  private _products = new BehaviorSubject<Product[]>([]);
  products$ = this._products.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((products) => this._products.next(products));
  }
}
