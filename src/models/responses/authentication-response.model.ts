import { UserData } from "../user-data.model";

export interface AuthenticationResponse{
    success: boolean;
    token: string;
    errorMessage: string;
}