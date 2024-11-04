import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { loginReducer } from './data-access/+state/login/login.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from './data-access/+state/login/login.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      login: loginReducer,
    }),
    provideEffects(LoginEffects),
    provideStoreDevtools({
      maxAge: 3,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideAnimations(),
    provideAnimationsAsync(),
  ],
};
