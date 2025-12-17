import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "./features/top-bar-utilities/top-bar/top-bar.component";
import { RouterOutlet } from '@angular/router';



@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    RouterOutlet
],
  template: `
    <div class="container mx-auto p-6">
      <app-top-bar></app-top-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {

}
