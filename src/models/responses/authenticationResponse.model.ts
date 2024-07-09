import { UserData } from "../user-data.model";

export interface AuthenticationResponse{
    success: boolean;
    user: UserData;
    errorMessage: string;
}