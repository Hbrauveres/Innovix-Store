import { createReducer, on } from '@ngrx/store';
import { customerState } from './auth.state';
import { loginFail, loginSuccess } from './auth.actions';

const _CustomerReducer = createReducer(
  customerState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      success: action.authenticationResponse.success,
      customer: action.authenticationResponse.customer,
      errorMessage: '',
    };
  }),
  on(loginFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  })
);

export function CustomerReducer(state: any, action: any) {
  return _CustomerReducer(state, action);
}
