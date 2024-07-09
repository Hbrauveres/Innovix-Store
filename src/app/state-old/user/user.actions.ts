import { createAction, props } from "@ngrx/store"
import { User } from "../../../models/user.model"

export const BEGIN_REGISTER = `[AUTH] begin register`

export const beginRegister = createAction(BEGIN_REGISTER, props<{userData: User}>());