import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure, updateUser, updateUserSuccess, updateUserFailure } from '../actions/user.actions';
import { UserState, initialUserState } from '../state/user.state';

export const userReducer = createReducer(
  initialUserState,
  on(loadUser, state => ({ ...state, loading: true })),
  on(loadUserSuccess, (state, { userInfo }) => ({ ...state, loading: false, userInfo })),
  on(loadUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(updateUser, state => ({ ...state, loading: true })),
  on(updateUserSuccess, (state, { userInfo }) => ({ ...state, loading: false, userInfo })),
  on(updateUserFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
