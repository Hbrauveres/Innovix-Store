export interface UserState {
    userInfo: any;
    loading: boolean;
    error: any;
  }
  
  export const initialUserState: UserState = {
    userInfo: null,
    loading: false,
    error: null,
  };
  