import { Component,ViewEncapsulation } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import translationsIT from "../../../../../public/i18n/it.json";
import translationsEN from "../../../../../public/i18n/en.json";

@Component({
  selector: 'app-change-language',
  imports: [],
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css', '../../../../../public/i18n/flag-icons.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeLanguageComponent {
  constructor(private translate:TranslateService) {}
  currentLanguage: string = localStorage.getItem('lang') || 'it';  
  changeLanguage = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    this.currentLanguage = value;
    localStorage.setItem('lang', value);
    switch(value){
      case 'it':
      this.translate.setTranslation("it", translationsIT);
      this.translate.setFallbackLang("it");
      break;
      case 'en':
      this.translate.setTranslation("en", translationsEN);
      this.translate.setFallbackLang("en");
      break;
    }
  }
}
