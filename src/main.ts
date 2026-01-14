import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/core/routes/routes';
import { APP_INITIALIZER } from '@angular/core';
import {KeycloakService}  from './app/core/services/keycloack.service';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import '@angular/localize/init'; // Importa le funzionalità di localizzazione di Angular

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),provideRouter(routes),{
      provide: APP_INITIALIZER,
      useFactory: () => () => KeycloakService.initKeycloak(),
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
}).catch((err) => console.error(err));
