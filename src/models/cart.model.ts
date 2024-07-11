import { Address } from "./address.model";
import { CartProduct } from "./cart-product";

export interface Cart {
    shippingAddress: Address;
    products: CartProduct[],
    shippingPrice: number,
    tax: number,
    subtotalPrice: number,
    totalPrice: number
}