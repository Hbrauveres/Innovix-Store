// actions/auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { RegisterUserData } from '../../../models/register-user-data.model';
import { LoginData } from '../../../models/login-data.model';
import { UserData } from '../../../models/user-data.model';

export const login = createAction('[Auth] Login', props<{ loginData: LoginData }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: UserData }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const register = createAction('[Auth] Register', props<{ registerUserData: RegisterUserData }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ user: UserData }>());
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());

export const logout = createAction('[Auth] Logout');
