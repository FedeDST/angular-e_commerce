import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "./features/top-bar-utilities/top-bar/top-bar.component";
import { RouterOutlet } from "@angular/router";
import { ToastComponent } from "./features/toast/toast.component";
import { ToastService } from "./core/services/toast.service";
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from "@ngx-translate/core";
import translationsEN from "../../public/i18n/en.json";
import translationsIT from "../../public/i18n/it.json";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    RouterOutlet,
    ToastComponent,
    TranslatePipe,
    TranslateDirective,
  ],
  template: `
    <app-toast *ngIf="toast$ | async as toast" [toastObj]="toast"></app-toast>
    <div class="container mx-auto p-6">
      <app-top-bar></app-top-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(
    private toastService: ToastService,
    private translate: TranslateService,
  ) {
    this.translate.setTranslation("it", translationsIT);
    this.translate.setFallbackLang("it");
  }
  toast$ = this.toastService.toast$;
}
