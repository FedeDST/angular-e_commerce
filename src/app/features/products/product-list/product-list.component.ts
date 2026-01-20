import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartStoreService } from '../../../core/services/cart-store.service';
import { ProductStoreService } from '../../../core/services/product-store.service';
import { Product } from '../../../core/models/product.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';
import { Toast } from '../../../core/models/toast.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [
    CommonModule,
    ProductSearchComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filtered: Product[] = [];
  toast:Toast = {message:'',status:null,visible:false};
  toastAddMsg ='';


  constructor(
    private cartStore: CartStoreService,
    private productStore: ProductStoreService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.productStore.products$.subscribe((products: Product[]) => {
      this.products = products;
      this.filtered = products;
    });
    this.productStore.loadProducts();
  }

  addToCart(product: Product) {
    this.cartStore.add(product);
    this.toastService.updateToast(this.toast,'cart.add','S');

  }

  onSearch(value: string) {
    this.filtered = this.products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
