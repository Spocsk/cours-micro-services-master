import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { LoginService } from '../../../core/services/login/login.service';
import { loginAction, loginSuccessAction } from './login.actions';
import { LoginResponse } from '../../../shared/interfaces/login.interfaces';

@Injectable()
export class LoginEffects {
  actions$ = inject(Actions);
  loginService = inject(LoginService);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      exhaustMap(({ type, ...credentials }) => {
        return this.loginService.login(credentials).pipe(
          map((loginResponse: LoginResponse) =>
            loginSuccessAction({
              access_token: loginResponse.access_token,
            })
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
