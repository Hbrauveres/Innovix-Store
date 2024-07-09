import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../state/user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserInfo = createSelector(
  selectUserState,
  (state: UserState) => state.userInfo
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
