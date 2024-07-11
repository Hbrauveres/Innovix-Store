import { Product } from "../product.model";

export interface ProductsResponse {
    products: Product[],
    loading: boolean,
    error: string,
    success: boolean
}