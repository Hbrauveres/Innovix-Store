import { createAction, props } from '@ngrx/store';

export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction('[User] Load User Success', props<{ userInfo: any }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());

export const updateUser = createAction('[User] Update User', props<{ userInfo: any }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ userInfo: any }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: any }>());