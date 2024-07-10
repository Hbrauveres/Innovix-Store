// effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../../services/authentication.service';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure } from './auth.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../../../models/responses/authenticationResponse.model';

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
              return loginSuccess({ user: response.user });
            } else {
              return loginFailure({ error: response.errorMessage });
            }
          }),
          catchError(error => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  // register$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(register),
  //     exhaustMap(action =>
  //       this.authService.register(action.registerUserData).pipe(
  //         map(user => registerSuccess({ user })),
  //         catchError(error => of(registerFailure({ error })))
  //       )
  //     )
  //   )
  // );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );

  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccess),
      map(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );
}
