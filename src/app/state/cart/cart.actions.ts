import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product.model';
import { Cart } from '../../../models/cart.model';
import { Address } from '../../../models/address.model';
import { CartProduct } from '../../../models/cart-product';

export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Product }>());

export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ productId: string }>());

export const loadCart = createAction('[Cart] Load Cart', props<{userEmail: string}>());
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cart: Cart }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: string }>());

export const calculateTax = createAction('[Cart] Calculate Tax');

export const calculateShipping = createAction('[Cart] Calculate Tax');

export const setShippingAddress = createAction('[Cart] Set Shipping Address', props<{ address: Address }>());

export const saveCart = createAction('[Cart] Save cart', props<{ cartItems: CartProduct[], address: Address, email: string }>());
export const saveCartSuccess = createAction('[Cart] Save cart Success');
export const saveCartFailure = createAction('[Cart] Save cart Failure', props<{ error: string }>());

