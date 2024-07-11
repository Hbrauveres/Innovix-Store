import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, updateCartItem, loadCart, loadCartSuccess, loadCartFailure, calculateTax, setShippingAddress } from '../actions/cart.actions';
import { CartState, initialCartState } from '../state/cart.state';

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => ({ ...state, items: [...state.items, product] })),
  on(removeFromCart, (state, { productId }) => ({ ...state, items: state.items.filter(item => item.id !== productId) })),
  on(updateCartItem, (state, { product }) => ({
    ...state,
    items: state.items.map(item => item.id === product.id ? product : item)
  })),
  on(loadCart, state => ({ ...state, loading: true })),
  on(loadCartSuccess, (state, { cartItems }) => ({ ...state, loading: false, items: cartItems })),
  on(loadCartFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(calculateTax, state => ({ ...state, tax: state.items.reduce((acc, item) => acc + item.price * 0.1, 0) })), 
  on(setShippingAddress, (state, { address }) => ({ ...state, shippingAddress: address }))
);
