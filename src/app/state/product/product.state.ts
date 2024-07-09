// state/products.state.ts
export interface ProductsState {
    products: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialProductsState: ProductsState = {
    products: [],
    loading: false,
    error: null,
  };
  