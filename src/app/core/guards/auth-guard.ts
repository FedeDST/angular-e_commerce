import {Injectable } from "@angular/core";
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import {KeycloakService} from "../services/keycloack.service";
@Injectable({ providedIn: "root" })
export class authGuard implements CanActivate {
  canActivate(): boolean {
    const kc = KeycloakService.getKeycloak();

    if (!kc?.authenticated) {
      kc?.login(); 
      return false;
    }

    return true;
  }
}
