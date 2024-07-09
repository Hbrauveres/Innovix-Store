// reducers/products.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from '../actions/products.actions';
import { ProductsState, initialProductsState } from '../state/products.state';

export const productsReducer = createReducer(
  initialProductsState,
  on(loadProducts, state => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, loading: false, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
