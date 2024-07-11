// reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(login, state => ({ ...state, loading: true })),
  on(loginSuccess, (state, { authToken }) => ({ ...state, loading: false, token: authToken, isLogged: true })),
  on(loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(logout, (state) => ({ ...state, user: null, isLogged: false, token: null }))
);
