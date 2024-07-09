import { createEntityAdapter } from "@ngrx/entity";
import { User, UserModel } from "../../../models/user.model";

export const UserAdapter = createEntityAdapter<User>();

export const UserState: UserModel = UserAdapter.getInitialState();