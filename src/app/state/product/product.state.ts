import { Product } from "../../../models/product.model";

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: any;
  }
  
export const initialProductsState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};
  