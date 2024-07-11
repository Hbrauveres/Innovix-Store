// actions/auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { LoginData } from '../../../models/login-data.model';

export const login = createAction('[Auth] Login', props<{ loginData: LoginData }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ authToken: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const logout = createAction('[Auth] Logout');
