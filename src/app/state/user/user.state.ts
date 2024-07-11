import { UserData } from "../../../models/user-data.model";

export interface UserState {
    user: UserData | null;
    loading: boolean;
    error: string ;
  }
  
  export const initialUserState: UserState = {
    user: null,
    loading: false,
    error: '',
  };
  