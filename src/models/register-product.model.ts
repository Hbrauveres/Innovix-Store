import { Product } from "./product.model";

export interface RegisterProduct extends Product {
    quantityInStock: number,
}