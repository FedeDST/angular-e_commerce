import { Injectable } from '@angular/core';
import { 
  faCartShopping, 
  faUser, 
  faRightToBracket, 
  IconDefinition,
  faHome,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  // raggruppiamo tutte le icone che servono
  public icons: Record<string, IconDefinition> = {
    cart: faCartShopping,
    user: faUser,
    login: faRightToBracket,
    home: faHome,
    spinner: faSpinner
  };
}
