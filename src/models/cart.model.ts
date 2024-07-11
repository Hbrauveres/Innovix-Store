import { Address } from "./address.model";
import { CartProduct } from "./cart-product";

export interface Cart {
    shippingAddress: Address;
    products: CartProduct[],
}