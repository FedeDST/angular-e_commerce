import { Component } from "@angular/core";
import { CartViewerComponent } from "../cart-viewer.component/cart-viewer.component";
import { LoginModalComponent } from "../../login/login-modal/login-modal.component";
import { AuthService } from "../../../core/services/auth.service";
import { UserMenuComponent } from "../../userMenu/user-menu/user-menu.component";
export interface User {
  email: string;
  password: string;
  role: "user" | "admin";
}
@Component({
  selector: "app-top-bar",
  imports: [CartViewerComponent, LoginModalComponent, UserMenuComponent],
  templateUrl: "./top-bar.component.html",
  styleUrl: "./top-bar.component.css",
})
export class TopBarComponent {
  opened: boolean = false;
  showUserMenu: boolean = false;
  loggedUser: User | undefined;
  toggleCartPreview() {
    this.showUserMenu = false;
    this.opened = !this.opened;
  }
  constructor(private auth: AuthService) {}
  showloginModal: boolean = false;
  toggleLoginModal() {
    this.opened = false;
    this.auth.isLogged().subscribe((user) => {
      if (!user.logged) {
        this.showloginModal = !this.showloginModal;
      } else {
        this.toggleUserMenu();
      }
    });
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
}
