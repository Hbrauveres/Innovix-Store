import { createAction, props } from '@ngrx/store';
import { UserData } from '../../../models/user-data.model';
import { RegisterUserData } from '../../../models/register-user-data.model';

export const loadUser = createAction('[User] Load User', props<{ userEmail: string, token: string }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ userData: UserData }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());

export const registerUser = createAction('[User] Register', props<{ registerUserData: RegisterUserData }>());
export const registerUserSuccess = createAction('[User] Register Success');
export const registerUserFailure = createAction('[User] Register Failure', props<{ error: any }>());