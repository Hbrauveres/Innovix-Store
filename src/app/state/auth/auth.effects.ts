// effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../../services/authentication.service';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure } from '../actions/auth.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

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
        this.authService.login(action.username, action.password).pipe(
          map(user => loginSuccess({ user })),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap(action =>
        this.authService.register(action.userData, action.password).pipe(
          map(user => registerSuccess({ user })),
          catchError(error => of(registerFailure({ error })))
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
