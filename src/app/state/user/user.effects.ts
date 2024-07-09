import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { loadUser, loadUserSuccess, loadUserFailure, updateUser, updateUserSuccess, updateUserFailure } from '../actions/user.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      exhaustMap(() =>
        this.userService.getUser().pipe(
          map(userInfo => loadUserSuccess({ userInfo })),
          catchError(error => of(loadUserFailure({ error })))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      exhaustMap(action =>
        this.userService.updateUser(action.userInfo).pipe(
          map(userInfo => updateUserSuccess({ userInfo })),
          catchError(error => of(updateUserFailure({ error })))
        )
      )
    )
  );
}
