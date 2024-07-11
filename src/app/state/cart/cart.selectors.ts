import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from '../state/cart.state';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartLoading = createSelector(
  selectCartState,
  (state: CartState) => state.loading
);

export const selectCartError = createSelector(
  selectCartState,
  (state: CartState) => state.error
);

export const selectCartTax = createSelector(
  selectCartState,
  (state: CartState) => state.tax
);

export const selectShippingAddress = createSelector(
  selectCartState,
  (state: CartState) => state.shippingAddress
);
