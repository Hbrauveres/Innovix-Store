// effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../../services/authentication.service';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../../../models/responses/authentication-response.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        this.authService.login(action.loginData).pipe(
          map((response: AuthenticationResponse) => {
            if (response.success) {
              console.log(response.token);
              return loginSuccess({ authToken: response.token });
            } else {
              return loginFailure({ error: response.errorMessage });
            }
          }),
          catchError(error => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );
}