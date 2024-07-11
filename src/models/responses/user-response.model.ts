import { UserData } from "../user-data.model";

export interface UserResponse{
    success: boolean;
    user: UserData;
    error: string;
}