import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth-guard-guard';
import { guestGuard } from '../guards/guest-guard-guard';
export const routes: Routes = [
    {path: '',loadComponent:() =>import('../../features/products/product-list/product-list.component').then(c=>c.ProductListComponent)},
    {path: 'login',loadComponent:() =>import('../../features/login/login.component').then(c=>c.LoginComponent),canActivate:[guestGuard]},
    {path: 'checkout',loadComponent:() =>import('../../features/chekout/chekout.component').then(c=>c.ChekoutComponent),canActivate:[authGuard]},

];