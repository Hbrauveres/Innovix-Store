import { Order } from "./order.model";

export interface UserData {
    name: string;
    birthdate: string;
    cpf: string;
    phone: string;
    email: string;
    token: string;
    orders: Order[];
}