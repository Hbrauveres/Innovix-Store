import { Product } from "../../../models/product.model";

// state/products.state.ts
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
  