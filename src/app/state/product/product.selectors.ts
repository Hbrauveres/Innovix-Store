// selectors/products.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './product.state';
import { Product } from '../../../models/product.model';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectProductById = (productId: string) => createSelector(
  selectProductsState,
  (state: ProductsState) => state.products.find(product => product.id === productId)
);

