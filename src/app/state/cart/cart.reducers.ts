import { createReducer, on } from '@ngrx/store';
import { addToCart, loadCart, loadCartSuccess, loadCartFailure, calculateTax, setShippingAddress, saveCart, saveCartSuccess, saveCartFailure, calculateTaxSuccess, calculateShipping, calculateShippingSuccess } from './cart.actions';
import { initialCartState } from './cart.state';

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => ({ ...state, items: [...state.items, product] })),

  on(loadCart, state => ({ ...state, loading: true })),
  on(loadCartSuccess, (state, { cart }) => ({ ...state, loading: false, items: cart.products, shippingAdrress: cart.shippingAddress })),
  on(loadCartFailure, (state, { error }) => ({ ...state, loading: false, error: error })),
  
  on(calculateTaxSuccess, (state, { tax }) => ({ ...state, tax: tax })), 
  on(calculateShippingSuccess, (state, { shipping }) => ({ ...state, shippingPrice: shipping })), 
  
  on(setShippingAddress, (state, { address }) => ({ ...state, shippingAddress: address })),
  
  on(saveCart, state => ({ ...state, loading: true })),
  on(saveCartSuccess, (state) => ({ ...state, loading: false })),
  on(saveCartFailure, (state, { error }) => ({ ...state, loading: false, error: error }))
);
