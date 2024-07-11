import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { ProductsState, initialProductsState } from './product.state';

export const productsReducer = createReducer(
  initialProductsState,
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, {products}) => ({ ...state, loading: false, products: products })),
  on(loadProductsFailure, (state, {error}) => ({ ...state, loading: false, error: error }))
);
