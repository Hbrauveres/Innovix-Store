import { EntityState } from "@ngrx/entity";

export interface User {
  username: string,
  password: string,
  name: string,
  email: string,
  phone: string,
  role: string,
  cpf: string,
  birthday: string,
  status: boolean
}

export interface UserModel extends EntityState<User>{

}
