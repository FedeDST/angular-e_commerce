import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./features/products/product-list/product-list.component";
import { TopBarComponent } from "./features/top-bar-utilities/top-bar/top-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
  ],
  template: `
    <div class="container mx-auto p-6">
      <app-top-bar></app-top-bar>
      <app-product-list></app-product-list>
    </div>
  `,
})
export class AppComponent {

}
