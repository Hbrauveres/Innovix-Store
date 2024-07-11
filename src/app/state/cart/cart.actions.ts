import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product.model';

export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ productId: string }>());
export const updateCartItem = createAction('[Cart] Update Cart Item', props<{ product: Product }>());
export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cartItems: any[] }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
export const calculateTax = createAction('[Cart] Calculate Tax');
export const calculateShipping = createAction('[Cart] Calculate Tax');
export const setShippingAddress = createAction('[Cart] Set Shipping Address', props<{ address: any }>());
