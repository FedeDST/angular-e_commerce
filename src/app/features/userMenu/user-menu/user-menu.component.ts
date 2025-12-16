import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-user-menu',
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {
  @Input() showMenu: boolean = false;
  
  user$ = this.auth.user$;

  constructor(private auth:AuthService) { }
  logout() {
    this.auth.logout();
    this.showMenu = false;
  }
}
