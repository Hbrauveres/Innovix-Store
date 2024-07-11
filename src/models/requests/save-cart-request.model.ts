import { Cart } from "../cart.model";

export interface SaveCartRequest {
    email: string,
    cart: Cart
}