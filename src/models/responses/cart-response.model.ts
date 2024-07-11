import { Cart } from "../cart.model";

export interface CartResponse {
    cart: Cart,
    loading: boolean,
    error: string,
    success: boolean
}