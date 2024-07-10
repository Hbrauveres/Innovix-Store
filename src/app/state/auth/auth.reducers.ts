// reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(login, register, state => ({ ...state, loading: true })),
  on(loginSuccess, registerSuccess, (state, { user }) => ({ ...state, loading: false, user, isLogged: true })),
  on(loginFailure, registerFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(logout, (state) => ({ ...state, user: null, isLogged: false }))
);
