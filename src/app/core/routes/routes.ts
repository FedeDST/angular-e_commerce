import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth-guard-guard';
export const routes: Routes = [
    {path: '',loadComponent:() =>import('../../features/products/product-list/product-list.component').then(c=>c.ProductListComponent)},
    {path: 'login',loadComponent:() =>import('../../features/login/login.component').then(c=>c.LoginComponent),canActivate:[authGuard]},
];