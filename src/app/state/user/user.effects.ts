import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../../services/user.service';
import { loadUser, loadUserSuccess, loadUserFailure, registerUserFailure, registerUserSuccess, registerUser } from './user.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { UserResponse } from '../../../models/responses/user-response.model';
import { RegisterUserResponse } from '../../../models/responses/register-user-response.model';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      exhaustMap(action =>
        this.userService.getUser(action.userEmail, action.token).pipe(
          map((response: UserResponse) => {
          if (response.success) {
            return loadUserSuccess({ userData: response.user });
          } else {
            return loadUserFailure({ error: response.error });
          }})
        )
      )
    )
  );

    register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      exhaustMap(action =>
        this.userService.registerUser(action.registerUserData).pipe(
          map((response: RegisterUserResponse) => {
            if (response.success) {
              return registerUserSuccess();
            } else {
              return registerUserFailure({ error: response.error });
            }})
        )
      )
    )
  );

  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserSuccess),
      map(() => {
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );
}
