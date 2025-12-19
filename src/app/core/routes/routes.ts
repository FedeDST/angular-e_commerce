import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth-guard';
import { guestGuard } from '../guards/guest-guard-guard';
export const routes: Routes = [
    {path: '',loadComponent:() =>import('../../features/products/product-list/product-list.component').then(c=>c.ProductListComponent)},
    {path: 'checkout',loadComponent:() =>import('../../features/chekout/chekout.component').then(c=>c.ChekoutComponent),canActivate:[authGuard]},
];