import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLogged
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
