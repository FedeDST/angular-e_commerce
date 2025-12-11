import { Component } from '@angular/core';
import { CartViewerComponent } from "../cart-viewer.component/cart-viewer.component";

@Component({
  selector: 'app-top-bar',
  imports: [CartViewerComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
opened: boolean = false;
toggleCartPreview() {
this.opened = !this.opened;
}

}
