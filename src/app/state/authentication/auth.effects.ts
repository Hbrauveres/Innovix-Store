import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../../services/authentication.service';
import { login, loginSuccess, loginFail } from './auth.actions';
import { catchError, from, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private service: AuthenticationService
  ) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      mergeMap((request) =>
        from(this.service.login(request.authenticationRequest)).pipe(
          map((authenticationResponse) =>
            loginSuccess({ authenticationResponse })
          ),
          catchError((error) => of(loginFail({ errorMessage: error.message })))
        )
      )
    )
  );
}
