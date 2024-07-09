import { UserData } from "../../../models/user-data.model";

// state/auth.state.ts
export interface AuthState {
    user: UserData | null;
    loading: boolean;
    error: any;
    isLogged: boolean;
  }
  
  export const initialAuthState: AuthState = {
    user: null,
    loading: false,
    error: null,
    isLogged: false
  };
  