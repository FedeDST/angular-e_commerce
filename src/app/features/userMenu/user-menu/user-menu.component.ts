import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService } from '../../../core/services/keycloack.service';
@Component({
  selector: 'app-user-menu',
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {
  @Input() showMenu: boolean = false;
  
  user$ = KeycloakService.tokenParsed();

  constructor() { }
  logout() {
    KeycloakService.logout();
    localStorage.removeItem('cart');
    this.showMenu = false;
  }
}
