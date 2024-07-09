import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('[Cart] Add To Cart', props<{ product: any }>());
export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ productId: number }>());
export const updateCartItem = createAction('[Cart] Update Cart Item', props<{ product: any }>());
export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cartItems: any[] }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
export const calculateTax = createAction('[Cart] Calculate Tax');
export const setShippingAddress = createAction('[Cart] Set Shipping Address', props<{ address: any }>());
