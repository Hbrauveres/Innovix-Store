import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product.model';
import { RegisterProduct } from '../../../models/register-product.model';

export const createProduct = createAction('[Product] Creating product', props<{ product: RegisterProduct }>());
export const creationSuccess = createAction('[Product] Product creation success', props<{ message: string }>());
export const creationFailure = createAction('[Product] Product creation failed', props<{ error: any }>());

export const loadProducts = createAction('[Product] Loading products');
export const loadProductsSuccess = createAction('[Product] Loading products success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product] Loading products failed', props<{ error: any }>());