import { Product } from "./product.model";

export interface OrderProduct extends Product {
    quantity: number;
    subtotal: number;
}