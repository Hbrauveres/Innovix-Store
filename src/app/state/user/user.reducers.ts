import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure, registerUser, registerUserSuccess, registerUserFailure } from './user.actions';
import { UserState, initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  on(loadUser, state => ({ ...state, loading: true })),
  on(loadUserSuccess, (state, { userData }) => ({ ...state, loading: false, user: userData })),
  on(loadUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(registerUser, state => ({ ...state, loading: true,  })),
  on(registerUserSuccess, (state) => ({ ...state, loading: false })),
  on(registerUserFailure, (state, { error }) => ({ ...state, loading: false, error: error }))
);