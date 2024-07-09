// state/auth.state.ts
export interface AuthState {
    user: any;
    loading: boolean;
    error: any;
  }
  
  export const initialAuthState: AuthState = {
    user: null,
    loading: false,
    error: null,
  };
  