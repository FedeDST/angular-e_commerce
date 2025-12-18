import { Component } from '@angular/core';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-chekout.component',
  imports: [CartComponent],
  templateUrl: './chekout.component.html',
  styleUrl: './chekout.component.css'
})
export class ChekoutComponent {
}
